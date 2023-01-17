const express = require("express");
const { getStudents } = require("../../controllers/studentControllers");
const router = express.Router();
/**
 * @swagger
 *  components:
 *   schema:
 *     Students:
 *      type: array
 *      items:
 *           type: object
 *           items:
 *               type: object
 *               properties:
 *                 name:
 *                    type: string
 *                 class:
 *                    type: integer
 *                 admission_number:
 *                    type: integer
 *                 stream:
 *                    type: string
 *      example:
 *            name: William
 *            admission_number: C5454
 *            class: 2
 *            stream: C
 */

/**
 * @swagger
 * components:
 *  schema:
 *      studentsResponse:
 *          type: object
 *          properties:
 *              success:
 *                  type: boolean
 *              success_message:
 *                  type: string
 *                  example: "list of students"
 *              students:
 *                  type: array
 *                  items:
 *                      $ref: '#components/schema/Students'
 *
 */

/**
 * @openapi
 * /api/students:
 *  get:
 *     tags:
 *     - Students
 *     summary: Get all Students
 *     security:
 *     - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *            type: string
 *         required: false
 *         description: student name
 *       - in: query
 *         name: admissionNumber
 *         schema:
 *            type: string
 *         required: false
 *         description: student admission number
 *       - in: query
 *         name: class
 *         schema:
 *            type: integer
 *         required: false
 *         description: student class
 *       - in: query
 *         name: stream
 *         schema:
 *            type: string
 *         required: false
 *         description: student stream
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schema/studentsResponse'  

 *       400:
 *         description: Bad request
 */
router.get("/api/students", getStudents);
module.exports = router;
