import { test, expect, describe } from "@jest/globals";
import { getRandom } from "./randomGet.js"
import { FirstTenData } from "./testingdata.js"


// give the test script an array of objects (get from the db)
// include a duplicate in the array
// 2 test:
// give it an array to test if it gets 5 items/10
// 6 items - 2 duplicates
// test should give back exactly 5 unique objects

test("Testing the getRandom to check that it produces 5 objects from an array of 10", () => {
  const data =  FirstTenData;
  const testArray = getRandom(data)
  expect(testArray.length).toEqual(5);
});


// test("Testing the getRandom to check that it produces 5 objects from an array of 10", () => {
//   const data =  FirstTenData;
  
//   expect(getRandom(data)).toEqual(array.length === 5);
//   expect(response.body).toEqual(
//     expect.objectContaining({
//       success: true,
//       payload: expect.arrayContaining([
//         expect.objectContaining({
//           id: expect.any(Number),
//           name: "Pear",
//           imageurl: expect.any(String),
//           description: expect.any(String),
//           family: expect.any(String),
//           foodtype: expect.any(String),
//           usedas: expect.any(String),
//           month: expect.arrayContaining([expect.any(String)]),
//           allergens: expect.any(String),
//         }),
//       ]),
//     })
//   );
// });