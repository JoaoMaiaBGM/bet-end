import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest";
import app from "../../../app";

import { describe, expect, test } from "@jest/globals";
import {
  mockedAdmin,
  mockedAdminLogin,
  mockedPool,
  mockedPoolWithoutId,
  mockedPooUpdate,
  mockedUser,
  mockedUser2,
  mockedUser2Login,
  mockedUserLogin,
} from "../mocks";

let tokenUser: string = "";

let tokenAdmin: string = "";

let tokenUser2: string = "";

let poolId: string = "";
describe("Test pool routes", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((error) => {
        console.log(error);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("POST /pools - should be able to create a pool", async () => {
    const resultUser = await request(app).post("/users").send(mockedUser);
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLogin);

    tokenUser = userLoginResponse.body.token;
    const id = resultUser.body.id;

    mockedPool.owner = id;

    const result = await request(app)
      .post("/pools")
      .send(mockedPool)
      .set("Authorization", `Bearer ${tokenUser}`);

    expect(result.body).toHaveProperty("id");
  });

  test("POST /pools - shold not be able create pool without authorization token ", async () => {
    const result = await request(app).post("/pools").send(mockedPoolWithoutId);

    expect(result.body).toHaveProperty("message");
    expect(result.status).toBe(401);
  });

  test("GET /pools - shold be able to list pool", async () => {
    await request(app).post("/users").send(mockedAdmin);

    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdminLogin);

    tokenAdmin = userLoginResponse.body.token;

    const result = await request(app)
      .get("/pools")
      .set("Authorization", `Bearer ${tokenAdmin}`);

    expect(result.body).toHaveLength(1);
  });

  test("GET /pools/:id - shold be able to list pool data", async () => {
    const poolToBeDelete = await request(app)
      .get("/pools")
      .set("Authorization", `Bearer ${tokenUser}`);

    poolId = poolToBeDelete.body[0].id;

    const result = await request(app)
      .get(`/pools/${poolToBeDelete.body[0].id}`)
      .set("Authorization", `Bearer ${tokenUser}`);

    expect(result.body).toHaveProperty("id");
    expect(result.status).toBe(200);
  });

  test("PATCH /pools/:id - shold be able to update a pool", async () => {
    const result = await request(app)
      .patch(`/pools/${poolId}`)
      .send(mockedPooUpdate)
      .set("Authorization", `Bearer ${tokenUser}`);

    expect(result.body).toHaveProperty("id");
    expect(result.body).toHaveProperty("name");
    expect(result.status).toBe(200);
  });

  test("PATCH /pools/:id - shold not be able to update a pool not been owner or adm", async () => {
    const resultUser = await request(app).post("/users").send(mockedUser2);
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUser2Login);
    tokenUser2 = userLoginResponse.body.token;
    const result = await request(app)
      .patch(`/pools/${poolId}`)
      .send(mockedPooUpdate)
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`);

    expect(result.body).toHaveProperty("message");
    expect(result.status).toBe(401);
  });
  test("DELETE /pools/:id - shold be able to delete pool", async () => {
    const poolToBeDelete = await request(app)
      .get("/pools")
      .set("Authorization", `Bearer ${tokenUser}`);

    const result = await request(app)
      .delete(`/pools/${poolToBeDelete.body[0].id}`)
      .set("Authorization", `Bearer ${tokenUser}`);

    expect(result.body).toHaveProperty("message");
    expect(result.status).toBe(200);
  });

  test("DELETE /pools/:id - shold not be able to delete pool whithout been owner", async () => {
    await request(app)
      .post("/pools")
      .send(mockedPool)
      .set("Authorization", `Bearer ${tokenUser}`);

    const poolToBeDelete = await request(app)
      .get("/pools")
      .set("Authorization", `Bearer ${tokenUser}`);

    const result = await request(app)
      .delete(`/pools/${poolToBeDelete.body[0].id}`)
      .set("Authorization", `Bearer ${tokenUser2}`);

    expect(result.body).toHaveProperty("message");
    expect(result.status).toBe(401);
  });
});
