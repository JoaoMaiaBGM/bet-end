import {
  mockedAdmin,
  mockedOtherMatch,
  mockedUpdateMatch,
  mockedUser,
  mockedUserLogin,
} from "./../mocks/index";
import AppDataSource from "../../../data-source";
import { DataSource } from "typeorm";
import request from "supertest";
import app from "../../../app";
import { describe, expect, test } from "@jest/globals";
import { mockedAdminLogin, mockedMatch } from "../mocks";

describe("/matches", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("POST /matches - Must be able to create a match", async () => {
    await request(app).post("/users").send(mockedAdmin);
    const adminLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdminLogin);
    const response = await request(app)
      .post("/matches")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedMatch);

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("day");
    expect(response.body).toHaveProperty("hour");
    expect(response.body).toHaveProperty("team1");
    expect(response.body).toHaveProperty("team2");
    expect(response.body).toHaveProperty("result");
    expect(response.body).toHaveProperty("score");
    expect(response.body).toHaveProperty("createdAt");

    expect(response.status).toBe(201);
  });

  test("POST /matches - Should not be able to create a match that already exists ", async () => {
    const response = await request(app).post("/matches").send(mockedMatch);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(409);
  });

  test("POST /matches - Should not be able to create a match without authentication", async () => {
    const response = await request(app).post("/matches").send(mockedOtherMatch);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("GET /matches - Should be able to list all matches", async () => {
    await request(app).post("/matches").send(mockedMatch);
    const response = await request(app).get("/matches");

    expect(response.body).toHaveLength(1);
    expect(response.status).toBe(200);
  });

  test("PATCH /matches/:id - Must be able to update a match", async () => {
    await request(app).post("/users").send(mockedAdmin);
    const adminLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdminLogin);
    const token = `Bearer ${adminLoginResponse.body.token}`;

    const matchToBeUpdated = await request(app).get("/matches");
    const matchToBeUpdateId = matchToBeUpdated.body[0].id;

    const response = await request(app)
      .patch(`/matches/${matchToBeUpdateId}`)
      .set("Authorization", token)
      .send(mockedUpdateMatch);

    const matchUpdated = await request(app).get("/matches");

    expect(matchUpdated.body[0].result).toEqual("Brasil");
    expect(matchUpdated.body[0].score).toEqual(2);
    expect(response.status).toBe(200);
  });

  test("PATCH /matches/:id - Should not be able to update a match with wrong id", async () => {
    await request(app).post("/users").send(mockedAdmin);
    const adminLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdminLogin);
    const token = `Bearer ${adminLoginResponse.body.token}`;

    const response = await request(app)
      .patch(`/matches/13970655-5dbe-423a-9a9d-5c23b37943cf`)
      .set("Authorization", token)
      .send(mockedUpdateMatch);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(404);
  });

  test("PATCH /matches - Should not be able to update a match without authentication", async () => {
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLogin);
    const token = `Bearer ${userLoginResponse.body.token}`;

    const matchToBeUpdated = await request(app).get("/matches");
    const matchToBeUpdateId = matchToBeUpdated.body[0].id;

    const response = await request(app)
      .patch(`/matches/${matchToBeUpdateId}`)
      .set("Authorization", token)
      .send(mockedUpdateMatch);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("PATCH /matches - Should not be able to update a match without admin permission", async () => {
    await request(app).post("/users").send(mockedUser);
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLogin);
    const token = `Bearer ${userLoginResponse.body.token}`;

    const matchToBeUpdated = await request(app).get("/matches");
    const matchToBeUpdateId = matchToBeUpdated.body[0].id;

    const response = await request(app)
      .patch(`/matches/${matchToBeUpdateId}`)
      .set("Authorization", token)
      .send(mockedUpdateMatch);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(403);
  });

  test("DELETE /matches/:id - Must be able to delete a match", async () => {
    await request(app).post("/users").send(mockedAdmin);
    const adminLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdminLogin);
    const token = `Bearer ${adminLoginResponse.body.token}`;

    const createdMatch = await request(app)
      .post("/matches")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedMatch);

    const matchToBeDelete = await request(app).get("/matches");
    const matchToBeDeleteId = matchToBeDelete.body[0].id;

    const response = await request(app)
      .delete(`/matches/${matchToBeDeleteId}`)
      .set("Authorization", token);

    expect(response.body).toEqual({});
    expect(response.status).toBe(204);
  });

  test("DELETE /matches/:id - Shouldn't be able to delete a match without authentication", async () => {
    const adminLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdminLogin);
    const token = `Bearer ${adminLoginResponse.body.token}`;

    const createdMatch = await request(app)
      .post("/matches")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedMatch);

    const matchToBeDelete = await request(app).get("/matches");
    const matchToBeDeleteId = matchToBeDelete.body[0].id;

    const response = await request(app).delete(`/matches/${matchToBeDeleteId}`);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("DELETE /matches/:id - Should not be able to delete a match without admin permission", async () => {
    await request(app).post("/users").send(mockedUser);
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLogin);
    const token = `Bearer ${userLoginResponse.body.token}`;

    const createdMatch = await request(app)
      .post("/matches")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`)
      .send(mockedMatch);

    const matchToBeDelete = await request(app).get("/matches");
    const matchToBeDeleteId = matchToBeDelete.body[0].id;

    const response = await request(app)
      .delete(`/matches/${matchToBeDeleteId}`)
      .set("Authorization", token);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(403);
  });

  test("DELETE /matches/:id - Should not be able to delete a match with wrong id", async () => {
    await request(app).post("/users").send(mockedAdmin);
    const adminLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdminLogin);
    const token = `Bearer ${adminLoginResponse.body.token}`;

    const createdMatch = await request(app)
      .post("/matches")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedMatch);

    const matchToBeDelete = await request(app).get("/matches");

    const response = await request(app)
      .delete("/matches/13970655-5dbe-423a-9a9d-5c23b37943cf")
      .set("Authorization", token);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(404);
  });
});
