const { executeQuery } = require("../src/database/connection");

async function createOffenseTypeTable() {
  try {
    let sql = `create table if not exists offense_type (
 id int(50) PRIMARY KEY NOT NULL AUTO_INCREMENT,
 name varchar(100) NOT NULL,
 points double NOT NULL)`;
    await executeQuery(sql, []);
    // console.log({ result });
    console.log("offense type table created");
  } catch (error) {
    console.log({
      error: error,
      message: "Error occurred while creating offense type table",
    });
  }
}
module.exports = {
  createOffenseTypeTable,
};
