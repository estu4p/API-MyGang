const request = require("supertest");
const app = require("../src/app");

test("GET users", async () => {
  const res = await request(app).get("/api/users");
  expect(res.statusCode).toBe(200);
});
