const OffenseType = require("../../models/offense_type/offense_type");

async function validateAddOffenseType(req) {
  if (!req.body.name) {
    return {
      isValid: false,
      message: "offense name is required.",
    };
  }

  if (!req.body.points) {
    return {
      isValid: false,
      message: "points deducted is required.",
    };
  }

  const offenseTypeExists = await OffenseType.exists(req.body.name);
  if (offenseTypeExists) {
    return {
      isValid: false,
      message: "offense type already exists!!",
    };
  }

  return {
    isValid: true,
    message: "",
  };
}
module.exports = { validateAddOffenseType };
