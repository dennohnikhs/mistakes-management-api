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

async function editTeacher(req, res) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const teacherPassword = hashedPassword;
  const teacherEmail = req.params.email;

  try {
    await Teacher.editTeacherPasswordDetails(teacherPassword, teacherEmail);
    return res.json({
      success: true,
      success_message: "teacher edited successfully",
    });
  } catch (error) {
    console.log("Error while trying to edit teacher");
    console.log({ error });
    res.status(500).json({
      // Send a 500 status code for server errors
      success: false,
      success_message: "Oops!!! an error occurred while trying to edit teacher",
    });
  }
}
async function searchTeacherByEmail(req, res) {
  const teacherEmail = req.query.email;

  try {
    let teacherResults = await Teacher.findOne(teacherEmail);
    if (!teacherResults) {
      return res.json({
        success: false,
        error_message: "No teacher found",
      });
    }
    return res.json({
      success: true,
      teacher: teacherResults,
    });
  } catch (error) {
    console.log("Error while trying to edit teacher");
    console.log({ error });
    res.status(500).json({
      // Send a 500 status code for server errors
      success: false,
      success_message:
        "Oops!!! an error occurred while trying to search teacher",
    });
  }
}
async function deleteTeacher(req, res) {
  const teacherEmail = req.params.email;

  try {
    await Teacher.deleteOneTeacher(teacherEmail);
    return res.json({
      success: true,
      success_message: "teacher deleted successfully",
    });
  } catch (error) {
    console.log("Error while trying to delete teacher");
    console.log({ error });
    res.status(500).json({
      // Send a 500 status code for server errors
      success: false,
      success_message:
        "Oops!!! an error occurred while trying to delete teacher",
    });
  }
}
module.exports = {
  addTeacher,
  getAllTeachers,
  deleteTeacher,
  editTeacher,
  searchTeacherByEmail,
};
