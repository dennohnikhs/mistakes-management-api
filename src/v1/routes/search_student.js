const express = require("express");
const { searchStudent } = require("../../controllers/studentControllers");
const router = express.Router();

router.get("/api/search/student", searchStudent);
module.exports = router;
