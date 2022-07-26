import query from "../index.js";
import dummyProduce from "../dummyData.js";


for (let i=0; i<dummyProduce.length; i++){
await query(
    `INSERT INTO produce 
(name, imageURL, description ,
family, foodType, usedAs, month, allergens
) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`,
[
dummyProduce[i].foodName,
dummyProduce[i].imageURL,
dummyProduce[i].description,
dummyProduce[i].family,
dummyProduce[i].foodType,
dummyProduce[i].usedAs, 
dummyProduce[i].month,
dummyProduce[i].allergens
]
);
}

