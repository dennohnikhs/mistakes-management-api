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
      req.body.class,
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
    let result = await Student.getAll(query, admissionNumber, stream,studentClass);
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

module.exports = {
  addStudent,
  getStudents,
};
