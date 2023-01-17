const { executeQuery } = require("../../database/connection");

class OffenseType {
  static async addOne(name, points) {
    try {
      await executeQuery(
        "INSERT INTO offense_type (name,points) VALUES (?,?)",
        [name, points]
      );
    } catch (error) {
      console.log({ error });
    }
  }
  static async exists(name) {
    const result = await executeQuery(
      "SELECT COUNT(*) AS existing_count FROM offense_type WHERE name = (?)",
      [name]
    );

    if (result && result[0].existing_count > 0) return true;

    return false;
  }
  static async getAll(query) {
    let sql = "SELECT * FROM offense_type";

    if (query) {
      sql += ` WHERE Name LIKE '%${query}%'`;
    }

    let result = await executeQuery(sql, []);
    return result;
  }

  static async getPoints(offenseTypeId) {
    const result = await executeQuery(
      "SELECT points AS points_deducted FROM offense_type WHERE id = (?)",
      [offenseTypeId]
    );
    if (result && result[0]) {
      return result[0].points_deducted;
    }
  }
}

module.exports = OffenseType;
