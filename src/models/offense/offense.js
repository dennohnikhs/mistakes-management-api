const { executeQuery } = require("../../database/connection");

class Offense {
  static async addOne(
    teacherId,
    offenseTypeId,
    studentId,
    comment,
    pointsDeducted,
    week
  ) {
    try {
      let result = await executeQuery(
        "INSERT INTO offense (teacher_id,offense_type_id,student_id,comment,points_deducted,week) VALUES (?,?,?,?,?,?)",
        [teacherId, offenseTypeId, studentId, comment, pointsDeducted, week]
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  static async exists(teacherId) {
    const result = await executeQuery(
      "SELECT COUNT(*) AS existing_count FROM offense WHERE teacher_id = (?)",
      [teacherId]
    );

    if (result && result[0].existing_count > 0) return true;

    return false;
  }
  static async getAll() {
    const result = await executeQuery("SELECT * FROM offense", []);
    return result;
  }
}
module.exports = Offense;
