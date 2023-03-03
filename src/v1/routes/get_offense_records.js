const express = require("express");
const { getOffenseRecords } = require("../../controllers/offenseControllers");
const router = express.Router();

/**
 * @swagger
 *  components:
 *   schema:
 *     Offenses:
 *      type: array
 *      items:
 *           type: object
 *           items:
 *               type: object
 *               properties:
 *                 teacher_id:
 *                    type: integer
 *                 offense_type_id:
 *                    type: integer
 *                 student_id:
 *                    type: integer
 *                 comment:
 *                    type: string
 *                 points_deducted:
 *                    type: integer
 *                 week:
 *                    type: integer
 *                 created_at:
 *                    type: Date
 *      example:
 *            id: 1
 *            offense_type_id: 2
 *            student_id: 23
 *            comment: teacher comments
 *            points_deducted:
 *            week: 2
 *            created_at: 2023-03-03T09:47:48.000Z
 */

/**
 * @swagger
 * components:
 *  schema:
 *      OffenseRecords:
 *          type: object
 *          properties:
 *              success:
 *                  type: boolean
 *              success_message:
 *                  type: string
 *                  example: "list of students Records"
 *              records:
 *                  type: array
 *                  items:
 *                      $ref: '#components/schema/Offenses'
 *
 */

/**
 * @openapi
 * /api/offenses:
 *  get:
 *     tags:
 *     - Offenses
 *     summary: Get all Offenses
 *     security:
 *     - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: created_id
 *         schema:
 *            type: Date
 *         required: false
 *         description: get Offenses  filtered by created time 
 *       - in: query
 *         name: student_id
 *         schema:
 *            type: integer
 *         required: false
 *         description: get Offenses filtered by student ids
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schema/OffensesResponse'  

 *       400:
 *         description: Bad request
 */

router.get("/api/offenses", getOffenseRecords);
module.exports = router;
