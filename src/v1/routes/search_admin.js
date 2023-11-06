const express = require("express");
const { searchAdminByEmail } = require("../../controllers/adminController");
const router = express.Router();

router.get("/api/search/admins", searchAdminByEmail);
module.exports = router;
