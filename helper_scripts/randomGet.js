// this function returns five random objects with no duplicates 


export function getRandom(allResults) {
  let randomResults = [];
  let length = allResults.length;

  if (length < 5) {
    return allResults;
  } else {
    for (let i = 0; i < 5; i++) {
      let randomNumber = Math.floor(Math.random() * length);
      if (
        randomResults.some((item) => {
          return item.id === allResults[randomNumber].id;
        })
      ) {
        i--;
      } else {
        randomResults.push(allResults[randomNumber]);
      }
    }
    return randomResults;
  }
};