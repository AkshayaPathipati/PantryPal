const request = require("supertest");
const { app } = require("./server");
const User = require("./User");

describe("Bug Fix Tests", () => {

    beforeEach(() => {
        jest.spyOn(User, "findOne").mockResolvedValue(null);

        jest.spyOn(User, "create").mockResolvedValue({
            _id: "mock-user-id",
            email: "notanemail2026xyz"
        });
    });

    afterEach(() => {
        jest.restoreAllMocks();
    })

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