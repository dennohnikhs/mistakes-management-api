const express = require("express");
const { addAdmin } = require("../../controllers/adminController");
const router = express.Router();
/**
 * @openapi
 * /api/admin/new:
 *  post:
 *     tags:
 *     - Admin
 *     summary: add new admin
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - phone_number
 *              - email
 *              - password
 *            properties:
 *              name:
 *                type: string
 *              phone_number:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *            example:
 *              name: deno
 *              phone_number: "0717019058"
 *              email: deno@gmail.com
 *              password: 123456
 *     responses:
 *      200:
 *        description: Ok
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */

router.post("/api/admin/new", addAdmin);
module.exports = router;
