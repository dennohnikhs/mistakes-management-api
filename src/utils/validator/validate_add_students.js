const { Student } = require("../../models/students/students");

async function validateAddStudents(req) {
  if (!req.body.name) {
    return {
      isValid: false,
      message: "name is required.",
    };
  }

  if (!req.body.admission_number) {
    return {
      isValid: false,
      message: "admission number is required.",
    };
  }

  if (!req.body.class) {
    return {
      isValid: false,
      message: "class name is required.",
    };
  }
  let pattern = /[A-Z][0-9][0-9][0-9][0-9]/;

  if (!req.body.admission_number.match(pattern)) {
    return {
      isValid: false,
      message: "wrong admission number format...This is an example `C8989`",
    };
  }

  if (!req.body.stream) {
    return {
      isValid: false,
      message: "stream name is required.",
    };
  }
  if (typeof req.body.name !== "string") {
    return {
      isValid: false,
      message: "name cannot be a number",
    };
  }
  const studentExists = await Student.exists(req.body.admission_number);
  if (studentExists) {
    return {
      isValid: false,
      message: "student already exists, please add a new student",
    };
  }

  return {
    isValid: true,
    message: "",
  };
}
module.exports = {
  validateAddStudents,
};
