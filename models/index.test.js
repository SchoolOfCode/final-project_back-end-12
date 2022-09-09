import { pool } from "../db/index.js";
import { getAll, getByItem, getByMonth, getByAllergen } from "./index.js";
import { test, expect, describe } from "@jest/globals";

test("testing the getAll model retrieves all items from the database", async () => {
  const response = await getAll();
  expect(response).toEqual(expect.any(Array));
  expect(response).toEqual(expect.arrayContaining([expect.any(Object)]));
  expect(response).toEqual(
    expect.arrayContaining([
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
    ])
  );
});

test("testing for the get by item function to make sure it returns the item selected", async () => {
  const response = await getByItem("pear");
  expect(response).toEqual(
    expect.arrayContaining([
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
    ])
  );
});

test("testing for the get by a month function to make sure it returns an item expected ", async () => {
  const response = await getByMonth("march");
  expect(response).toEqual(
    expect.arrayContaining([
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
    ])
  );
});

test("testing for the get by allergen function to make sure it returns an item expected ", async () => {
  const response = await getByAllergen("fish");
  expect(response).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        imageurl: expect.any(String),
        description: expect.any(String),
        family: expect.any(String),
        foodtype: expect.any(String),
        usedas: expect.any(String),
        month: expect.any(Array),
        allergens: "Fish",
      }),
    ])
  );
});

afterAll((done) => {
  pool.end();
  done();
});
