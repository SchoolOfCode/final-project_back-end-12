import query from "../index.js";

const sqlString = `DROP TABLE IF EXISTS produce`

await query(sqlString);