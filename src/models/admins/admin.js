const { executeQuery } = require("../../database/connection");
const bcrypt = require("bcryptjs");

class Admin {
  static async addOne(name, email, phone_number, password) {
    try {
      let result = await executeQuery(
        "INSERT INTO admin (name,email,phone_number,password) VALUES (?,?,?,?)",
        [name, email, phone_number, password]
      );
      console.log("admin posted", result);
      // return result;
    } catch (error) {
      console.log({ error });
    }
  }
  static async deleteOneAdmin(adminEmail) {
    try {
      let result = await executeQuery("DELETE FROM admin WHERE email =  (?)", [
        adminEmail,
      ]);
      console.log("admin deleted", result);
    } catch (error) {
      console.log({ error });
      throw error; // Propagate the error to the controller
    }
  }
  static async findOne(adminEmail) {
    let result = await executeQuery(
      "SELECT name,phone_number,id FROM admin WHERE email =  (?)",
      [adminEmail]
    );
    if (result.length > 0) {
      return result;
    }
    return false;
  }
  static async editAdminDetails(adminPassword, adminEmail) {
    try {
      let result = await executeQuery(
        "UPDATE admin SET password = (?)  WHERE email = (?)",
        [adminPassword, adminEmail]
      );
      console.log("admin password reset successfully", result);
    } catch (error) {
      console.log({ error });
      throw error; // Propagate the error to the controller
    }
  }

  static async validateAdmin(adminEmail, adminPassword) {
    const result = await executeQuery(
      "SELECT * FROM admin WHERE email = (?)LIMIT 1",
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
