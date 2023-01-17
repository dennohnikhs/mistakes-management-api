const { executeQuery } = require("../../database/connection");
const { buildQuery } = require("../../utils/util");

class Student {
  static async addOne(studentName, admissionNumber, className, streamName) {
    try {
      await executeQuery(
        "INSERT INTO student (name,admission_number,class,stream) VALUES (?,?,?,?)",
        [studentName, admissionNumber, className, streamName]
      );
    } catch (error) {
      console.log(error);
    }
  }
  static async exists(admissionNumber) {
    const result = await executeQuery(
      "SELECT COUNT(*) AS existing_count FROM student WHERE admission_number  = ?",
      [admissionNumber]
    );

    if (result && result[0].existing_count > 0) return true;

    return false;
  }
  static async getAll(query, admissionNumber, stream, studentClass) {
    const conditions = [];
    if (query) {
      conditions.push(`s.Name LIKE '%${query}%'`);
    }
    if (admissionNumber) {
      conditions.push(` s.admission_number = "${admissionNumber}"`);
    }
    if (stream) {
      conditions.push(` s.stream = "${stream}"`);
    }
    if (studentClass) {
      conditions.push(` s.class = ${studentClass}`);
    }
    let sql = buildQuery("SELECT * FROM student s", conditions);
    const result = await executeQuery(sql, []);
    return result;
  }
  static async getOne(studentId) {
    const result = await executeQuery(
      "SELECT id,name,class,stream,admission_number FROM student WHERE id = (?)",
      [studentId]
    );
    if (result && result[0]) {
      const studentDetails = result[0];
      return studentDetails;
    }
  }
}
module.exports = {
  Student,
};
