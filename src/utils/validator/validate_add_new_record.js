async function validateNewOffense(req) {
  if (!req.body.offense_type_id) {
    return {
      isValid: false,
      message: "Offense type id  required.",
    };
  }

  if (!req.body.student_id) {
    return {
      isValid: false,
      message: "student id required.",
    };
  }

  if (!req.body.comment) {
    return {
      isValid: false,
      message: "Teachers' comment  required.",
    };
  }

  return {
    isValid: true,
    message: "",
  };
}
module.exports = {
  validateNewOffense,
};
