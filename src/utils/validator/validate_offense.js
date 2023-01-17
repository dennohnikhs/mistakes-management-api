const Offense = require("../../models/offense/offense");

async function validateAddOffense(req) {
  if (!req.body.offense_type_id) {
    return {
      isValid: false,
      message: "Offense type ID is required.",
    };
  }
  if (!req.body.comment) {
    return {
      isValid: false,
      message: "Teacher's comment is required.",
    };
  }
  if (!req.body.student_id) {
    return {
      isValid: false,
      message: "Student ID is required.",
    };
  }
  s;

  const offenseExists = await Offense.exists(req.body.teacher_id);
  if (offenseExists) {
    return {
      isValid: false,
      message: "offense has already been reported!!",
    };
  }

  return {
    isValid: true,
    message: "",
  };
}
module.exports = { validateAddOffense };
