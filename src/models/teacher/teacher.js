const { executeQuery } = require("../../database/connection");
const bcrypt = require("bcryptjs");

class Teacher {
  static async addOne(name, email, phone, password, role) {
    try {
      await executeQuery(
        "INSERT INTO teacher (name,email,phone_number,password,role) VALUES (?,?,?,?,?)",
        [name, email, phone, password, role]
      );
    } catch (error) {
      console.log({ error });
    }
  }
  static async exists(email) {
    const result = await executeQuery(
      "SELECT COUNT(*) AS existing_count FROM teacher WHERE email = (?)",
      [email]
    );

    if (result && result[0].existing_count > 0) return true;

    return false;
  }
  static async findOne(email) {
    const result = await executeQuery(
      "SELECT name,email,phone_number,id FROM teacher WHERE email =  (?) LIMIT 1",
      [email]
    );
    if (result.length > 0) {
      return result;
    }
    return false;
  }
  static async deleteOneTeacher(teacherEmail) {
    try {
      let result = await executeQuery(
        "DELETE FROM teacher WHERE email =  (?)",
        [teacherEmail]
      );
      console.log("teacher deleted", result);
    } catch (error) {
      console.log({ error });
      throw error; // Propagate the error to the controller
    }
  }
  static async editTeacherPasswordDetails(teacherPassword, teacherEmail) {
    try {
      let result = await executeQuery(
        "UPDATE teacher SET password = (?)  WHERE email = (?)",
        [teacherPassword, teacherEmail]
      );
      console.log("teacher password reset successfully", result);
    } catch (error) {
      console.log({ error });
      throw error; // Propagate the error to the controller
    }
  }
  static async validateTeacher(teacherEmail, teacherPassword) {
    const result = await executeQuery(
      "SELECT  * FROM teacher WHERE email = (?) LIMIT 1",
      [teacherEmail, teacherPassword]
    );
    if (result.length > 0) {
      const teacher = result[0];
      let passwordVerified = await bcrypt.compare(
        teacherPassword,
        teacher.password
      );

      if (!passwordVerified) {
        return false;
      }

      delete teacher.password;
      return teacher;
    }
    return false;
  }

  static async getAll() {
    const result = await executeQuery("SELECT * FROM teacher", []);
    return result;
  }
}
module.exports = { Teacher };
