//Andy could test the routes here but we are going to test the app
/* 
import { test, expect, describe } from "@jest/globals";
import { pool } from '../db/index.js'
import request from "supertest";
import { router } from './index.js'

test("Testing get all using /", async () => {
  const response = await request(router)
    .get('/')
    .set("Accept", "application/json");
  expect(response.status).toEqual(200);
  expect(response.body).toEqual(
    expect.objectContaining({
      success: true,
      payload: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          imageurl: expect.any(String),
          description: expect.any(String),
          family: expect.any(String),
          foodtype: expect.any(String),
          usedas: expect.any(String),
          month: expect.arrayContaining([expect.any(String)]),
          allergens: expect.any(String),
        }),
      ]),
    })
  );
});
 */
/* test("Testing get item using a query after produce", async () => {
  const response = await request(router)
    .get("/?item=pear")
    .set("Accept", "application/json");
  expect(response.status).toEqual(200);
  expect(response.body).toEqual(
    expect.objectContaining({
      success: true,
      payload: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: 'Pear',
          imageurl: expect.any(String),
          description: expect.any(String),
          family: expect.any(String),
          foodtype: expect.any(String),
          usedas: expect.any(String),
          month: expect.arrayContaining([expect.any(String)]),
          allergens: expect.any(String),
        }),
      ]),
    })
  );
});

test("Testing the get month route using a month query", async () => {
  const response = await request(router)
    .get("/?month=march")
    .set("Accept", "application/json");
  expect(response.status).toEqual(200);
  expect(response.body).toEqual(
    expect.objectContaining({
      success: true,
      payload: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          imageurl: expect.any(String),
          description: expect.any(String),
          family: expect.any(String),
          foodtype: expect.any(String),
          usedas: expect.any(String),
          month: expect.arrayContaining(['March']),
          allergens: expect.any(String),
        }),
      ]),
    })
  );
});
 */

afterAll((done) => {
  pool.end();
  done();
});