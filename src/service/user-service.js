import { prisma } from "../application/database.js"
import { ResponseError } from "../error/response-error.js"
import { getUserValidation, loginUserValidation, registerUserValidation, updateUserValidation } from "../validation/user-validation.js"
import { validate } from "../validation/validation.js"
import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"


const register = async (req) => {
    const user = await validate(registerUserValidation, req)

    const countUser = await prisma.user.count({
        where: {
            username: "yafizham"
        },
    })

    if (countUser == 1) {
        throw new ResponseError(400, "username is already exist")
    }

    user.password = bcrypt.hashSync(user.password, 10)

    return await prisma.user.create({
        data: user,
        select: {
            username: true,
            name: true,
        }
    })

}

const login = async (req) => {
    const requestUser = await validate(loginUserValidation, req)
    const founduser = await prisma.user.findUnique({
        where: {
            username: requestUser.username
        },
        select: {
            username: true,
            password: true
        }
    })

    if (!founduser) {
        throw new ResponseError(404, "no account found with such username")
    }
    const checkPasswordCompare = bcrypt.compareSync(requestUser.password, founduser.password)
    if (!checkPasswordCompare) {
        throw new ResponseError(401, "username or password is wrong")
    }
    else {
        const token = uuid().toString()
        await prisma.user.update({
            data: {
                token,
            },
            where: {
                username: requestUser.user,
            },
            select: {
                token: true
            }
        })
    }
}

const getUser = async (username) => {
    validate(getUserValidation, username)
    const user = await prisma.user.findUnique({
        where: {
            username
        },
        select: {
            username: true,
            name: true
        }
    })
    if (!user) {
        throw new ResponseError(404, "user not found")
    }

    return user
}

const update = async (req) => {
    const userRequest = await validate(updateUserValidation, req)
    const totalUSerInDatabase = await prisma.user.count({
        where: {
            username: userRequest.username
        },
    })
    if (totalUSerInDatabase !== 1) {
        throw new ResponseError(404, "no user found with the username")
    }

    const data = {}
    if (userRequest.username) {
        data.username = userRequest.username
    }
    if (userRequest.password) {
        data.password = bcrypt.hashSync(userRequest.password, 10)
    }
    if (userRequest.name) {
        data.name = userRequest.name
    }
    return prisma.user.update({
        where: {
            username: userRequest.username
        },
        data: data,
        select: {
            username: true,
            name: true
        }
    })

}

export default {
    register,
    login,
    getUser,
    update
}