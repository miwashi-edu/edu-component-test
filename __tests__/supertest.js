const supertest = require('supertest')
const app = require("../server.js")

describe('When testing jest', () => {
	describe('given i have a non failing test', () => {
		it('should be one', () => {
			expect(1).toBe(1)
		})
	})
})

test("GET /api/user", async () => {
    await supertest(app)
        .get("/api/user")
        .expect(200)
        .then((response) => {
        })
})