const { executeQuery } = require("../src/database/connection");

async function createStudentsTable() {
  try {
    let sql = `create table if not exists student(
id int primary key auto_increment,
name varchar(255)not null,
admission_number varchar(255) not null unique,
class int (255) not null,
stream varchar(255)  not null,
status tinyint (20)not null default 0)`;
    await executeQuery(sql, []);
    // console.log({ result });
    console.log("students table created");
  } catch (error) {
    console.log({
      error: error,
      message: "Error occurred while creating students table",
    });
  }
}
module.exports = {
  createStudentsTable,
};
