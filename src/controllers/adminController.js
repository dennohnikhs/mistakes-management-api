const bcrypt = require("bcryptjs");
const Admin = require("../models/admins/admin");
const { validateAddAdmin } = require("../utils/validator/validate_add_admin");

async function addAdmin(req, res) {
  try {
    const validationResult = await validateAddAdmin(req);
    if (!validationResult.isValid) {
      return res.json({
        success: false,
        error_message: validationResult.message,
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    await Admin.addOne(
      req.body.name,
      req.body.email,
      req.body.phone_number,
      hashedPassword
    );
    return res.json({
      success: true,
      success_message: "Admin added successfully",
    });
  } catch (error) {
    {
      console.log("Error while trying to add  admin");
      console.log({ error });
      res.json({
        success: false,
        success_message:
          "Oops!!! an error occurred while trying to add new admin.",
      });
    }
  }
}
async function getAdmins(req, res) {
  try {
    let result = await Admin.getAllAdmins();
    return res.json({
      success: true,
      success_message: "list of Admins",
      list_of_admins: result,
    });
  } catch (error) {
    {
      console.log("Error while trying to get admins");
      console.log({ error });
      res.json({
        success: false,
        success_message: "Oops!!! an error occurred while trying to get admins",
      });
    }
  }
}
module.exports = { addAdmin, getAdmins };
