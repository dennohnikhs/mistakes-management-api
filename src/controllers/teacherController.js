const {
  validateAddTeacher,
} = require("../utils/validator/validate_add_teachers");
const bcrypt = require("bcryptjs");
const { Teacher } = require("../models/teacher/teacher");

async function addTeacher(req, res) {
  try {
    const validationResult = await validateAddTeacher(req);
    if (!validationResult.isValid) {
      return res.json({
        success: false,
        error_message: validationResult.message,
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    await Teacher.addOne(
      req.body.name,
      req.body.email,
      req.body.phone_number,
      hashedPassword,
      req.body.role
    );
    return res.json({
      success: true,
      success_message: "Teacher added successfully",
    });
  } catch (error) {
    {
      console.log("Error while trying to add  teacher");
      console.log({ error });
      res.json({
        success: false,
        success_message:
          "Oops!!! an error occurred while trying to add new teacher.",
      });
    }
  }
}
async function getAllTeachers(req, res) {
  try {
    let result = await Teacher.getAll();
    return res.json({
      success: true,
      success_message: "list of teachers",
      list_of_teachers: result,
    });
  } catch (error) {
    {
      console.log("Error while trying to get teachers");
      console.log({ error });
      res.json({
        success: false,
        success_message:
          "Oops!!! an error occurred while trying to get teachers",
      });
    }
  }
}
module.exports = { addTeacher, getAllTeachers };
