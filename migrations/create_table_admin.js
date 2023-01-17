const { executeQuery } = require("../src/database/connection");

async function createAdminTable() {
  try {
    let sql = `create table if not exists admin(
         id int(255) PRIMARY KEY  AUTO_INCREMENT,
 name varchar(100) NOT NULL,
 email varchar(100) NOT NULL unique,
 phone_number varchar(50) NOT NULL unique,
 password varchar(50) NOT NULL
    )`;
    await executeQuery(sql, []);
    // console.log({ result });
    console.log("Admins table created");
  } catch (error) {
    console.log({
      error: error,
      message: "Error occurred while creating Admins table",
    });
  }
}
module.exports = {
  createAdminTable,
};
