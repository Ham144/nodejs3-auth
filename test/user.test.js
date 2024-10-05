import supertest from "supertest";
import { web } from "../src/application/web.js";
import { prisma } from "../src/application/database.js";
import { logger } from "../src/application/logging.js";
import { createTestUserExample, removeTestUser } from "./test-util.js";

//register user test
describe('POST /api/users', () => {

    afterEach(async () => {
        await removeTestUser()
    })

    it('should should register user username ham144', async () => {
        const result = await supertest(web)
            .post("/api/users")
            .send({
                username: "ham144",
                password: "password",
                name: "yafizham"
            })
        expect(result.status).toBe(200)
        expect(result.body.username).toBe("ham144")
        expect(result.body.name).toBe("yafizham")
        expect(result.body.password).toBeUndefined()

    });


    it('should reject if the request is invalid', async () => {
        const result = await supertest(web)
            .post("/api/users")
            .send({
                username: "ham100",
                email: "weird request",
                password: ""
            })

        logger.info(result.body)

        expect(result.status).toBeFalsy(200)
        expect(result.body.errors).toBeDefined()
    });

});

describe('POST /api/users/login', () => {
    beforeEach(async () => {
        await createTestUserExample()
    })

    afterEach(async () => {
        await removeTestUser()
    })

    it('should can login as ham144', async () => {
        const result = await supertest(web)
            .post("/api/users/login")
            .send({
                username: "ham144",
                password: "password",
            })
        logger.info(result.body)

        expect(result.status).toBe(200)
        expect(result.body.token).toBeDefined()
        expect(result.body.username).toBe("ham144")
        expect(result.body.token).not.toBe("test")
    });

});

describe('GET /api/users/current', () => {
    beforeEach(async () => {
        await createTestUserExample()
    })

    afterEach(async () => {
        await removeTestUser()
    })


    it('should can get the current user', async () => {
        try {
            const result = await supertest(web)
                .get("/api/users/current")
                .set("Authorization", "test")

            expect(result.status).toBe(200)
            expect(result.body.username).toBeDefined()
            expect(result.body.name).toBeDefined()
            expect(result.body.username).toBe("ham144")
        } catch (error) {
            logger.error(error.message)
        }
    });

    it('should reject if the token is invalid', async () => {
        try {
            const result = await supertest(web)
                .get("/api/users/current")
                .set("Authorization", "wrong_token")

            expect(result.status).not.toBe(200)
            expect(result.body.token).toBeUndefined()
            expect(result.body.errors).toBeDefined()
        } catch (error) {
            logger.error(error.message)
        }
    });



});

describe('PATCH /api/users/current', () => {
    beforeEach(async () => {
        await createTestUserExample()
    })
    afterEach(async () => {
        await removeTestUser()
    })

    it('should can update/edit the user', async () => {

        try {
            const result = await supertest(web)
                .patch("/api/users/current")
                .set("Authorization", "test")
                .send({
                    name: "new yafizham",
                    password: "password"
                })
                .send({
                    username: "ham144",
                    name: "new yafizham",
                    password: "password"
                })

            expect(result.status).toBe(200)
            expect(result.body.username).toBe("ham144")
            expect(result.body.password).toBeUndefined()
            expect(result.body.name).toBe('new yafizham')
        } catch (error) {
            logger.error(error.message)
            console.log(error)
        }
    });

});

