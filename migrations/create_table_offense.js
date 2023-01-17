const { executeQuery } = require("../src/database/connection");

async function createOffenseTable() {
  try {
    let sql = `create table if not exists offense(
        id int(50) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        teacher_id int(50) NOT NULL,
        offense_type_id int(20) NOT NULL,
        student_id int(50) NOT NULL,
        comment text NOT NULL,
        points_deducted double NOT NULL,
        week int(50) NOT NULL,
        created_at date(6) DEFAULT GETDATE())`;
    await executeQuery(sql, []);
    // console.log({ result });
    console.log("offense table created");
  } catch (error) {
    console.log({
      error: error,
      message: "Error occurred while creating offense table",
    });
  }
}
module.exports = {
  createOffenseTable,
};
