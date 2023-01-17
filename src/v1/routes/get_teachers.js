const express = require("express");
const { getAllTeachers } = require("../../controllers/teacherController");
const router = express.Router();

/**
 * @swagger
 *  components:
 *   schema:
 *     Teachers:
 *      type: array
 *      items:
 *           type: object
 *           items:
 *               type: object
 *               properties:
 *                 name:
 *                    type: string
 *                 phone_number:
 *                    type: string
 *                 email:
 *                    type: string
 *                 stream:
 *                    type: string
 *      example:
 *            name: Martha karua
 *            phone_number: "0723664765"
 *            email: 1234@example.com
 *            password: C56fghrt*
 *            role: 1
 */

/**
 * @swagger
 * components:
 *  schema:
 *      teachersResponse:
 *          type: object
 *          properties:
 *              success:
 *                  type: boolean
 *              success_message:
 *                  type: string
 *                  example: "list of teachers"
 *              teachers:
 *                  type: array
 *                  items:
 *                      $ref: '#components/schema/Teachers'
 *
 */

/**
 * @openapi
 * /api/teachers:
 *  get:
 *     tags:
 *     - Teachers
 *     summary: Get all Teachers
 *     security:
 *     - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *            type: string
 *         required: false
 *         description: get teacher's name
 *       - in: query
 *         name: phone_number
 *         schema:
 *            type: string
 *         required: false
 *         description: get teacher's phone number
 *       - in: query
 *         name: email
 *         schema:
 *            type: string
 *         required: false
 *         description: get teacher's email
 *       - in: query
 *         name: password
 *         schema:
 *            type: string
 *         required: false
 *         description: get password
 *       - in: query
 *         name: role
 *         schema:
 *            type: string
 *         required: false
 *         description: get teacher's role
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schema/teachersResponse'  

 *       400:
 *         description: Bad request
 */
router.get("/api/teachers", getAllTeachers);
module.exports = router;
