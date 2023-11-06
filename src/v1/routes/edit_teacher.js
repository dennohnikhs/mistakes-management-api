const express = require("express");
const { editTeacher } = require("../../controllers/teacherController");
const router = express.Router();

router.put("/api/teacher/edit/:email", editTeacher);
module.exports = router;
