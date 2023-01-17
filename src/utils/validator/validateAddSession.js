const Session = require("../../models/session/session");

async function validateAddSession(req) {
  if (!req.body.term) {
    return {
      isValid: false,
      message: "term is required.",
    };
  }

  if (!req.body.start_date) {
    return {
      isValid: false,
      message: "start_date is required",
    };
  }
  if (req.body.start_date >= req.body.end_date) {
    return {
      isValid: false,
      message: "term start_date should be less than term end date",
    };
  }
  const sessionExists = await Session.exists(req.body.start_date);
  if (sessionExists) {
    return {
      isValid: false,
      message: "Session exists!!!",
    };
  }

  return {
    isValid: true,
    message: "",
  };
}
module.exports = {
  validateAddSession,
};
