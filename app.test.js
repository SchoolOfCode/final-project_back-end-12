import { test, expect, describe } from "@jest/globals";
import { pool } from "./db/index.js";
import request from "supertest";
import { app } from "./app.js";

test("Testing get all function using /produce route", async () => {
  const response = await request(app)
    .get("/produce")
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

test("Testing to get a particular item by using a query in the produce route", async () => {
  const response = await request(app)
    .get("/produce?item=pear")
    .set("Accept", "application/json");
  expect(response.status).toEqual(200);
  expect(response.body).toEqual(
    expect.objectContaining({
      success: true,
      payload: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: "Pear",
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

test("Testing to get a particualr month from the produce route using a month query", async () => {
  const response = await request(app)
    .get("/produce?month=march")
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
          month: expect.arrayContaining(["March"]),
          allergens: expect.any(String),
        }),
      ]),
    })
  );
});


test("Testing that produce/random returns 5 objects", async () => {
  const response = await request(app)
    .get("/produce/random?month=January")
    .set("Accept", "application/json");
  expect(response.status).toEqual(200);
  expect(response.body.payload.length).toEqual(5);
});

test("Testing that random produce returns an object with expected key value pairs and the month key contains January string", async () => {
  const response = await request(app)
    .get("/produce/random?month=January")
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
          month: expect.arrayContaining(["January"]),
          allergens: expect.any(String),
        }),
      ]),
    })
  );
  
});


test("Testing that random produce returns 5 unique objects from the database for January", async () => {
  const response = await request(app)
    .get("/produce/random?month=January")
    .set("Accept", "application/json");
  expect(response.status).toEqual(200);

    const testArray = response.body.payload;
  
    let randomResults = [];
  
    let check = null;
  
      for (let i = 0; i < testArray.length; i++) {
  
          if (
            randomResults.some((item) => {
              return item.id === testArray[i].id;
            })
          ) {
            check = false;
          } else {
            randomResults.push(testArray[i]);
            check = true;
          }
      }
  
    expect(check).toEqual(true);

}),
 
afterAll((done) => {
  pool.end(done);
});
