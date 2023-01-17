const express = require("express");
const { addTeacher } = require("../../controllers/teacherController");

const router = express.Router();
/**
 * @openapi
 * /api/teacher/new:
 *  post:
 *     tags:
 *     - Teacher
 *     summary: add new teacher
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
 *              - role
 *            properties:
 *              name:
 *                type: string
 *              phone_number:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *              role:
 *                type: integer
 *            example:
 *              name: Mr Rashon
 *              phone_number: "0702820251"
 *              email: odipoo2343@gmail.com
 *              password:   123456
 *              role: 1
 *     responses:
 *      200:
 *        description: Ok
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
router.post("/api/teacher/new", addTeacher);
module.exports = router;
