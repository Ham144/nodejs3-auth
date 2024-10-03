
import { PrismaClient } from "@prisma/client";
import { logger } from "./logging.js";

const prisma = new PrismaClient({
    log: [
        {
            emit: "event",
            level: 'error',
        },
        {
            emit: "event",
            level: 'warn',
        },
        {
            emit: "event",
            level: 'info',
        }
    ]


})

prisma.$on('error', (e) => {
    logger.error(e)
})

prisma.$on('warn', (e) => {
    logger.warn(e)
})

prisma.$on('info', (e) => {
    logger.info(e)
})

export {
    prisma
}