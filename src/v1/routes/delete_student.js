const express = require("express");
const { deleteStudent } = require("../../controllers/studentControllers");
const router = express.Router();

router.delete("/api/student/:admission_number", deleteStudent);
module.exports = router;
