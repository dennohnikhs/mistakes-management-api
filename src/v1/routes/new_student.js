const express = require("express");
const { addStudent } = require("../../controllers/studentControllers");
const router = express.Router();
/**
 * @openapi
 * /api/student/new:
 *  post:
 *     tags:
 *     - Student
 *     summary: add new student
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - admission_number
 *              - class
 *              - stream
 *            properties:
 *              name:
 *                type: string
 *              admission_number:
 *                type: string
 *              class:
 *                type: integer
 *              stream:
 *                type: string
 *            example:
 *              name: William Ruto
 *              admission_number: C9567
 *              class: 5
 *              stream: A
 *     responses:
 *      200:
 *        description: Ok
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */

router.post("/api/student/new", addStudent);

module.exports = router;
