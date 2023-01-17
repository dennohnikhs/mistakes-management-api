const { executeQuery } = require("../src/database/connection");

async function createSessionPoints() {
  try {
    let sql = `create table if not exists session_points(
                id int(50) PRIMARY KEY NOT NULL AUTO_INCREMENT,
                session_id int(50) NOT NULL,
                student_id int(50) NOT NULL,
                points float NOT NULL
                                    )`;
    await executeQuery(sql, []);
    // console.log({ result });
    console.log("session points table created");
  } catch (error) {
    console.log({
      error: error,
      message: "Error occurred while creating session points table",
    });
  }
}
module.exports = {
  createSessionPoints,
};
