import { test, expect, describe } from "@jest/globals";
import { getRandom } from "./randomGet.js"
import { firstTenData, duplicateData, randomData } from "./testingdata.js"

test("Testing the getRandom function to check that it produces 5 objects from an array of 10 objects", () => {

  const data =  firstTenData;

  const testArray = getRandom(data);

  expect(testArray.length).toEqual(5);

});

test("Testing the getRandom to check that it produces 5 unique objects with no duplicates from an array of 10 objects (with 5 duplicates)", () => {
  
  const data =  duplicateData;

  const testArray = getRandom(data);

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

});

test("Testing the getRandom to check that it produces 5 unique objects with no duplicates from an array of 10 (with 5 duplicates)", () => {
  
  const data =  duplicateData;
  const result = getRandom(data);

  let fiftySeven = 0;
  let fiftyEight = 0;
  let fiftyNine = 0;
  let sixty = 0;
  let sixtyOne = 0;

  for (let i = 0; i < result.length; i++) {
    if (result[i].id === 57) { fiftySeven ++}
    else if (result[i].id === 58) { fiftyEight ++}
    else if (result[i].id === 59) { fiftyNine ++}
    else if (result[i].id === 60) { sixty ++}
    else if (result[i].id === 61) { sixtyOne ++}
    }

  expect(fiftySeven).toEqual(1);
  expect(fiftyEight).toEqual(1);
  expect(fiftyNine).toEqual(1);
  expect(sixty).toEqual(1);
  expect(sixtyOne).toEqual(1);
});