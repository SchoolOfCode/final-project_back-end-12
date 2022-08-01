export function getRandom(allResults){

    let randomResults = [];

    let length = allResults.length;

    if (length < 5){
        return allResults;
        } else {
        for (let i = 0; 1 < 5; i++){
            let randomNumber = Math.floor(Math.random() * length);
            randomResults.push(allResults[randomNumber]);
        }
        return randomResults
    };
};