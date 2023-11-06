const express = require("express");
const { editAdmin } = require("../../controllers/adminController");
const router = express.Router();

router.put("/api/admin/edit/:email", editAdmin);
module.exports = router;
