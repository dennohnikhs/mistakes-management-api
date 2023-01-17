const { executeQuery } = require("../src/database/connection");

async function createSessionTable() {
  try {
    let sql = `create table if not exists session(
                id int(50) PRIMARY KEY NOT NULL AUTO_INCREMENT,
                term int(20) NOT NULL,
                start_date datetime(6) NOT NULL,
                end_date datetime(6) NOT NULL
    )`;
    await executeQuery(sql, []);
    // console.log({ result });
    console.log("session table created");
  } catch (error) {
    console.log({
      error: error,
      message: "Error occurred while creating session table",
    });
  }
}
module.exports = {
  createSessionTable,
};
