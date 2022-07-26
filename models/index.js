import query from "../db/index.js";

export async function getAll() {
  let res = await query(`SELECT * FROM produce`)
  return res.rows
}