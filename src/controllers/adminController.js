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
async function deleteAdmin(req, res) {
  const adminEmail = req.params.email;

  try {
    await Admin.deleteOneAdmin(adminEmail);
    return res.json({
      success: true,
      success_message: "admin deleted successfully",
    });
  } catch (error) {
    console.log("Error while trying to delete admin");
    console.log({ error });
    res.status(500).json({
      // Send a 500 status code for server errors
      success: false,
      success_message: "Oops!!! an error occurred while trying to delete admin",
    });
  }
}
async function editAdmin(req, res) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const adminPassword = hashedPassword;
  const adminEmail = req.params.email;

  try {
    await Admin.editAdminDetails(adminPassword, adminEmail);
    return res.json({
      success: true,
      success_message: "admin edited successfully",
    });
  } catch (error) {
    console.log("Error while trying to edit admin");
    console.log({ error });
    res.status(500).json({
      // Send a 500 status code for server errors
      success: false,
      success_message: "Oops!!! an error occurred while trying to edit admin",
    });
  }
}
async function searchAdminByEmail(req, res) {
  const adminEmail = req.query.email;

  try {
    const isFoundAdmin = await Admin.findOne(adminEmail);
    if (!isFoundAdmin) {
      return res.json({ success: false, error_message: "Admin not found" });
    }

    return res.json({
      success: true,
      admin: isFoundAdmin,
    });
  } catch (error) {
    console.log("Error while trying to search admin");
    console.log({ error });
    res.status(500).json({
      // Send a 500 status code for server errors
      success: false,
      success_message: "Oops!!! an error occurred while trying to search admin",
    });
  }
}

module.exports = {
  addAdmin,
  getAdmins,
  deleteAdmin,
  editAdmin,
  searchAdminByEmail,
};
