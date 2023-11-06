const express = require("express");
const { searchTeacherByEmail } = require("../../controllers/teacherController");
const router = express.Router();

router.get("/api/search/teacher", searchTeacherByEmail);
module.exports = router;
