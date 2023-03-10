const express = require("express");
const request = require("supertest");

const login = require("./login");

const app = express();
const baseURL = "http://localhost:3000";

app.post("/api/users/login", login);

describe("test login controller", () => {
    const testUser = { email: "serhii@mail.com", password: "123456" };

    test("login returns status 200", async () => {
        const responce = await request(baseURL)
            .post("/api/users/login")
            .send(testUser);

        expect(responce.statusCode).toBe(200);
    });
    test("login returns token", async () => {
        const responce = await request(baseURL)
            .post("/api/users/login")
            .send(testUser);
        expect(responce.body.data.user.token).toBeTruthy();
    });
    test("login returns body", async () => {
        const responce = await request(baseURL)
            .post("/api/users/login")
            .send(testUser);
        const { user } = responce.body.data;

        expect(typeof user.email).toBe("string");
        expect(typeof user.subscription).toBe("string");
    });
});
