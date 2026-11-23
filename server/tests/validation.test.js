const request = require("supertest");
const { app } = require("../server");

describe("Bug Fix Tests", () => {
    test("GE-06: Reject invalid email registration", async () => {
        const response = await request(app)
            .post("/api/register")
            .send({
                email: "notanemail2026xyz",
                password: "TestPassword123!"
            });
        
        expect(response.status).toBe(400);
        expect(response.body.message).toBe("Invalid email format.");
    });
})