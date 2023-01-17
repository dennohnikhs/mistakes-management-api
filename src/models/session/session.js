const { executeQuery } = require("../../database/connection");

class Session {
  static async AddOne(term, startDate, endDate) {
    try {
      await executeQuery(
        "INSERT INTO session (term,start_date,end_date) values (?,?,?)",
        [term, startDate, endDate]
      );
    } catch (error) {
      console.log(error);
    }
  }
  static async exists(startDate) {
    const result = await executeQuery(
      "SELECT COUNT(*) As existing_count  FROM session WHERE start_date = (?)",
      [startDate]
    );
    console.log(result);
    if (result && result[0].existing_count > 0) {
      return true;
    }
    return false;
  }

  static async getSession() {
    const result = await executeQuery(
      "SELECT s.id FROM session s WHERE s.start_date < NOW() AND s.end_date > NOW()",
      []
    );
    if (result && result[0]) {
      let sessionId = result[0].id;
      return sessionId;
    } else {
      return false;
    }
  }
  static async sessionStartDate() {
    const result = await executeQuery(
      "SELECT s.start_date FROM session s WHERE s.start_date < NOW() AND s.end_date > NOW()",
      []
    );
    if (result && result[0]) {
      return result[0].start_date;
    } else {
      return false;
    }
  }
}
module.exports = Session;
