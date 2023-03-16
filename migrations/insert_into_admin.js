const { executeQuery } = require("../src/database/connection");

async function addMainAdmin() {
  try {
    let sql = `INSERT INTO admin (name,phone_number,email,password)VALUES("admin","0717019058","admin@gmail.com","$2a$12$nx9hp55txIAjiSW56oClaOnEBdxVqd4jZa2IXMDdTmWJOiFp8Pg7y")`;
    await executeQuery(sql, []);
    console.log("main admin has been added successfully");
  } catch (error) {
    console.log({
      error: error,
      message: "Error occurred while adding main admin into the database",
    });
  }
}
module.exports = {
  addMainAdmin,
};
