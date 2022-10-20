import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
const connectionString = process.env.PGURI;

export const pool = new pg.Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params, callback) {
  return pool.query(text, params, callback);
}

/* 
This is our connection to the database.
Check your PGURI is up to date in .env.

Below is a console.log that tests you've set up your connecction.
By running dbtest, the current time will be printed in the console.
*/

// console.log(await query("SELECT NOW()"))
