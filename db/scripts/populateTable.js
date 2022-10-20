import query from "../index.js";
import data from "../data.js";

for (let i = 0; i < data.length; i++) {
  await query(
    `INSERT INTO produce 
(name, imageURL, description ,
family, foodType, usedAs, month, allergens
) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`,
    [
      data[i].foodName,
      data[i].imageURL,
      data[i].description,
      data[i].family,
      data[i].foodType,
      data[i].usedAs,
      data[i].month,
      data[i].allergens,
    ]
  );
}
