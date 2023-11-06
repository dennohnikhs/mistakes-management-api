const express = require("express");
const { login } = require("../../controllers/authController");
const router = express.Router();

/**
 * @openapi
 * /api/login:
 *  post:
 *     tags:
 *     - Login
 *     summary: login teacher
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *              - isAdmin
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *              isAdmin:
 *                type: boolean
 *            example:
 *              email: deno@gmail.com
 *              password: "123456"
 *              isAdmin: false
 *     responses:
 *      200:
 *        description: Ok
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */

router.post("/api/login", login);
module.exports = router;
