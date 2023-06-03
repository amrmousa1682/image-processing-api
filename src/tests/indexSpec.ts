import app from "../index";
import supertest from "supertest";

const request = supertest(app);

describe("test endpoints for different images", () => {
  it("test encenadaport image", async () => {
    const res = await request
      .get("/api")
      .query({ filename: "encenadaport", width: "200", height: "200" });
    expect(res.statusCode).toBe(200);
  });
  it("test fjord image", async () => {
    const res = await request
      .get("/api")
      .query({ filename: "fjord", width: "200", height: "200" });
    expect(res.statusCode).toBe(200);
  });
  it("test image not found message", async () => {
    const res = await request
      .get("/api")
      .query({ filename: "hello", width: "200", height: "200" });
    expect(res.statusCode).toBe(400);
  });
  it("test image without width", async () => {
    const res = await request
      .get("/api")
      .query({ filename: "hello", height: "200" });
    expect(res.statusCode).toBe(400);
  });
  it("test image without height", async () => {
    const res = await request
      .get("/api")
      .query({ filename: "hello", width: "200" });
    expect(res.statusCode).toBe(400);
  });
});
