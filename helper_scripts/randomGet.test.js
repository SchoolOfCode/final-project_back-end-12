import { test, expect, describe } from "@jest/globals";
import { getRandom } from "./randomGet.js"
import { firstTenData, duplicateData, randomData } from "./testingdata.js"


test("Testing the getRandom to check that it produces 5 objects from an array of 10", () => {

  const data =  firstTenData;

  const testArray = getRandom(data);

  expect(testArray.length).toEqual(5);

});

test("Testing the getRandom to check that it produces 5 unique objects with no duplicates from an array of 10 (with 5 duplicates)", () => {
  
  const data =  duplicateData;

  const testArray = getRandom(data);

  let randomResults = [];

  let check = null;

  function randomTest(){


    for (let i = 0; i < 5; i++) {

        if (
          testArray.some((item) => {
            return item.id === randomResults[i];
          })
        ) {
          let check = false;
        } else {
          randomResults.push(allResults[randomNumber]);
          let check = true;
        }
    }
  } 

  expect(check).toEqual(true);

});

// test("Testing the getRandom to check that it produces 5 unique objects with no duplicates from an array of 10 (with 5 duplicates)", () => {
  
//   const data =  duplicateData;

//   const testArray = getRandom(data);

//   let randomResult = randomData;

//   function randomTest(testArray, randomResults){

//     for (let i = 0; i < 5; i++) {

//         if (
//           testArray.some((item) => {
//             return item.id === randomResults[i];
//           })
//         ) {
//           false;
//         } else {
//           true;
//         }
//     }
//   } 

//   expect().toEqual();

// });

  //Plan
  // expecting the sum of all testArray.id = (57, 58, 59, 60, 61)Sum of them = 295
  // create variable for id sum =0
  // To get the sum we will loop through (.map) and add id integer to id sum.
  // test the idsum equals what we are expecting (295).




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