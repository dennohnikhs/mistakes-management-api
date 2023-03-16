const mysql = require("mysql2");
const { makeDb } = require("mysql-async-simple");

// var con = {
//   host: process.env.DB_HOST || "localhost",
//   user: process.env.DB_USERNAME || "root",
//   password: process.env.DB_PASSWORD || "",
//   database: process.env.DB_NAME || "points_system",
// };
var con = {
  host: "localhost",
  user: "root",
  password: "",
  database: "points_system",
};

let connection;

function handleDisconnect() {
  connection = mysql.createPool(con); // Recreate the connection, since
}
handleDisconnect();

const db = makeDb();

async function executeQuery(sql, fields) {
  try {
    let returnObj = await db.query(connection, sql, fields);
    return returnObj;
  } catch (e) {
    // handle exception
    console.log({ e });
  }
}

module.exports = {
  connection,
  executeQuery,
};
