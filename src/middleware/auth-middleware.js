import { prisma } from "../application/database.js"

const authMidleware = async (req, res, next) => {
    const token = req.get('Authorization')
    if (!token) {
        return res.status(401).json({
            errors: "unauthorized token null"
        }).end()
    }
    else {
        const user = await prisma.user.findFirst({
            where: {
                token: token
            },
        })

        if (!user) {
            return res.status(401).json({
                errors: "unauthorized"
            }).end()
        }
        else {
            req.user = user
            next()
        }
    }

}
export default authMidleware