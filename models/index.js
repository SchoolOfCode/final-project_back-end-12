import query from "../db/index.js";

export async function getAll() {
  let res = await query(`SELECT * FROM produce`);
  return res.rows;
}
export async function getByItem(item) {
  let res = await query(
    `SELECT * FROM produce WHERE lower(name) LIKE lower($1)`,
    [item]
  );
  return res.rows;
}
export async function getByMonth(month) {
  let res = await query(
    `SELECT * FROM produce WHERE lower($1) ILIKE ANY(month);`,
    [month]
  );
  return res.rows;
}
export async function getByAllergen(allergen) {
  let res = await query(
    `SELECT * FROM produce WHERE lower($1) ILIKE allergens;`,
    [allergen]
  );
  return res.rows;
}
export async function getByFamily(family) {
  let res = await query(`SELECT * FROM produce WHERE lower($1) ILIKE family;`, [
    family,
  ]);
  return res.rows;
}
export async function getByFoodType(foodType) {
  let res = await query(
    `SELECT * FROM produce WHERE lower($1) ILIKE foodtype;`,
    [foodType]
  );
  return res.rows;
}
export async function getByUsedAs(usedAs) {
  let res = await query(`SELECT * FROM produce WHERE lower($1) ILIKE usedas;`, [
    usedAs,
  ]);
  return res.rows;
}
