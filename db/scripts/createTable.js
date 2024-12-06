import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS produce 
(id SERIAL PRIMARY KEY,
name TEXT,
imageURL TEXT,
description TEXT,
family TEXT,
foodType TEXT,
usedAs TEXT,
month TEXT [],
allergens TEXT
);`

await query(sqlString);