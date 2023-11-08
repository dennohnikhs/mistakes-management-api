const { Student } = require("../models/students/students");
const {
  validateAddStudents,
} = require("../utils/validator/validate_add_students");

async function addStudent(req, res) {
  try {
    const validationResult = await validateAddStudents(req);

    if (!validationResult.isValid) {
      return res.json({
        success: false,
        error_message: validationResult.message,
      });
    }

    await Student.addOne(
      req.body.name,
      req.body.admission_number,
      req.body.student_class,
      req.body.stream
    );
    return res.json({
      success: true,
      success_message: "student added successfully",
    });
  } catch (error) {
    {
      console.log("Error while trying to add  student");
      console.log({ error });
      res.json({
        success: false,
        success_message:
          "Oops!!! an error occurred while trying to add new student.",
      });
    }
  }
}
async function getStudents(req, res) {
  try {
    const query = req.query.q;
    const admissionNumber = req.query.admissionNumber;
    const stream = req.query.stream;
    const studentClass = req.query.class;
    let result = await Student.getAll(
      query,
      admissionNumber,
      stream,
      studentClass
    );
    return res.json({
      success: true,
      success_message: "list of students",
      list_of_students: result,
    });
  } catch (error) {
    {
      console.log("Error while trying to get students");
      console.log({ error });
      res.json({
        success: false,
        success_message:
          "Oops!!! an error occurred while trying to get students",
      });
    }
  }
}
async function deleteStudent(req, res) {
  const studentAdmissionNumber = req.params.admission_number;
  try {
    await Student.deleteOneStudent(studentAdmissionNumber);
    return res.json({
      success: true,
      success_message: "student deleted successfully",
    });
  } catch (error) {
    console.log("Error while trying to delete student");
    console.log({ error });
    res.status(500).json({
      // Send a 500 status code for server errors
      success: false,
      success_message:
        "Oops!!! an error occurred while trying to delete student",
    });
  }
}
module.exports = {
  addStudent,
  getStudents,
  deleteStudent,
};
