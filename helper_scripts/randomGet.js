export function getRandom(allResults) {
  let randomResults = [];
  let length = allResults.length;
  if (length < 5) {
    return allResults;
  } else {
    for (let i = 0; i < 5; i++) {
      console.log("Returning 5 items");
      let randomNumber = Math.floor(Math.random() * length);
      console.log(randomNumber);
      randomResults.push(allResults[randomNumber]);
    }
    return randomResults;
  }
}
