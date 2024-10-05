import { prisma } from "../src/application/database"
import bcrypt from "bcrypt"

export const removeTestUser = async () => {
    await prisma.user.deleteMany({
        where: {
            username: "yafizham"
        }
    })
}

export const createTestUserExample = async () => {
    await prisma.user.create({
        data: {
            username: "yafizham",
            name: "yafizham",
            password: bcrypt.hashSync("password", 10),
            token: "test"
        }
    })
}

export const getTestUserExmaple = async () => {
    const result = await prisma.user.findUnique({
        where: {
            username: username
        }
    })
    return result
}