const { executeQuery } = require("../../database/connection");

class SessionPoints {
  static async addNewSessionPointsRecord(studentPoints, student_id, sessionId) {
    try {
      let result = await executeQuery(
        ` INSERT INTO session_points (points, student_id, session_id)
       VALUES (points-(?), (?), (?))`,
        [studentPoints, student_id, sessionId]
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  static async checkForIdExists(studentId) {
    const result = await executeQuery(
      "SELECT COUNT(*) AS existing_id FROM session_points WHERE student_id  = ?",
      [studentId]
    );

    if (result && result[0].existing_id > 0) return true;

    return false;
  }
  static async updateExistingRecord(points, studentId) {
    const result = await executeQuery(
      "UPDATE session_points SET points = points -(?) WHERE student_id = ?",
      [points, studentId]
    );

    return result;
  }
}

module.exports = SessionPoints;
// INSERT INTO session_points (points, student_id, session_id) VALUES(points-(?), (?), (?)) ON DUPLICATE KEY UPDATE
// points = VALUES(points), student_id = VALUES(student_id),session_id = VALUES(session_id)

// INSERT INTO session_points
//     (student_id, session_id,points)
// VALUES
//     (18,14,points-10)
// ON DUPLICATE KEY UPDATE
//     student_id = student_id,
//     session_id = session_id,
//     points = points-10
