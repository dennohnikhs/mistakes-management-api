// login

const { Teacher } = require("../models/teacher/teacher");
const Admin = require("../models/admins/admin");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });

async function login(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const isAdmin = req.body.isAdmin;
  if (!email || !password) {
    res.statusCode = 401;
    return res.json({
      message: "Please provide all details.",
      success: false,
    });
  }

  if (isAdmin) {
    const adminDetails = await Admin.validateAdmin(email, password);
    if (adminDetails) {
      let token = jwt.sign(
        { id: adminDetails.id, isAdmin: true },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );
      return res.send({
        success: true,
        message: "Admin login successful ✔ ",
        token: token,
      });
    } else {
      res.statusCode = 401;
      return res.send({
        message: "Invalid email or password",
        success: false,
      });
    }
  } else {
    const teacherDetails = await Teacher.validateTeacher(email, password);
    if (teacherDetails) {
      let token = jwt.sign(
        { id: teacherDetails.id, isAdmin: false },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );
      return res.send({
        success: true,
        message: "Teacher login successful",
        token: token,
      });
    } else {
      res.statusCode = 401;
      return res.json({
        message: "Invalid email or password",
        success: false,
      });
    }
  }
}

module.exports = { login };
