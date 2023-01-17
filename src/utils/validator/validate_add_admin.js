const Admin = require("../../models/admins/admin");

async function validateAddAdmin(req) {
  if (!req.body.name) {
    return {
      isValid: false,
      message: "name is required.",
    };
  }

  if (!req.body.email) {
    return {
      isValid: false,
      message: "email is required.",
    };
  }

  if (!req.body.phone_number) {
    return {
      isValid: false,
      message: "phone number is required.",
    };
  }
  if (typeof req.body.name !== "string") {
    return {
      isValid: false,
      message: "name cannot be a number",
    };
  }
  const adminExists = await Admin.exists(req.body.email);
  if (adminExists) {
    return {
      isValid: false,
      message: "Admin exists!!",
    };
  }

  return {
    isValid: true,
    message: "",
  };
}
module.exports = {
  validateAddAdmin,
};
