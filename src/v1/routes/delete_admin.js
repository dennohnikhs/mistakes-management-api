const express = require("express");
const { deleteAdmin } = require("../../controllers/adminController");
const router = express.Router();

router.delete("/api/admin/:email", deleteAdmin);
module.exports = router;
