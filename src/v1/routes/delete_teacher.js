const express = require("express");
const { deleteTeacher } = require("../../controllers/teacherController");
const router = express.Router();

router.delete("/api/teacher/:email", deleteTeacher);
module.exports = router;
