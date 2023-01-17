const { executeQuery } = require("../src/database/connection");

async function createTableTeacher() {
  try {
    let sql = `create table if not exists teacher(
        id int(50) PRIMARY KEY NOT NULL AUTO_INCREMENT,
 name varchar(255) NOT NULL,
 email varchar(255) NOT NULL unique,
 phone_number varchar(50) NOT NULL unique,
 password varchar(50) NOT NULL,
 role int(50) NOT NULL)`;
    await executeQuery(sql, []);
    // console.log({ result });
    console.log("teacher table created");
  } catch (error) {
    console.log({
      error: error,
      message: "Error occurred while creating teachers table",
    });
  }
}
module.exports = {
  createTableTeacher,
};
