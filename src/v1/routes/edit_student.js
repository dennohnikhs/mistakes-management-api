const express = require("express");
const { editStudent } = require("../../controllers/studentControllers");
const router = express.Router();

router.put("/api/student/edit/:admission_number", editStudent);
module.exports = router;
