import pg from 'pg';
const connectionString = process.env.PGURI;

const pool = new pg.Pool({connectionString, ssl: {rejectUnauthorized: false}});

export default function query(text, params, callback) {
  return pool.query(text, params, callback)
};

// Checks that query is a-ok.
// console.log(await query("SELECT NOW()"))