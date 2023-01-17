const { executeQuery } = require("../src/database/connection");

async function setDefaultPoints() {
  try {
    let sql = `ALTER TABLE session_points
ALTER COLUMN points SET DEFAULT 100`;
    await executeQuery(sql, []);
    // console.log({ result });
    console.log("points set success");
  } catch (error) {
    console.log({
      error: error,
      message: "Error occurred while while setting default points",
    });
  }
}
module.exports = {
  setDefaultPoints,
};
