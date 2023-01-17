const { executeQuery } = require("../../database/connection");
const bcrypt = require("bcryptjs");

class Admin {
  static async addOne(name, email, phone_number, password) {
    try {
      await executeQuery(
        "INSERT INTO admin (name,email,phone_number,password) VALUES (?,?,?,?)",
        [name, email, phone_number, password]
      );
    } catch (error) {
      console.log({ error });
    }
  }
  static async validateAdmin(adminEmail, adminPassword) {
    const result = await executeQuery(
      "SELECT id,email, password FROM admin WHERE email = (?)LIMIT 1",
      [adminEmail, adminPassword]
    );
    if (result.length > 0) {
      const admin = result[0];
      let passwordVerified = await bcrypt.compare(
        adminPassword,
        admin.password
      );
      if (!passwordVerified) {
        return false;
      }
      delete admin.password;

      return admin;
    }
    return false;
  }
  static async exists(email) {
    const result = await executeQuery(
      "SELECT COUNT(*) AS existing_count FROM admin WHERE email = (?)",
      [email]
    );

    if (result && result[0].existing_count > 0) return true;

    return false;
  }
  static async getAllAdmins() {
    const result = await executeQuery("SELECT * FROM admin", []);
    return result;
  }
}
module.exports = Admin;
