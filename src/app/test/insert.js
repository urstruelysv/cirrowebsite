import sqlite3 from "sqlite3";
import { execute } from "./sql.js";

const main = async () => {
  const db = new sqlite3.Database("my.db");
  const sql = `INSERT INTO products(name, price) VALUES(?, ?)`;
  try {
    await execute(db, sql, ["iPhone", 899.99]);
  } catch (err) {
    console.log(err);
  } finally {
    db.close();
  }
};

main();
