const express = require("express");
const { getSessions } = require("../../controllers/sessionController");
const router = express.Router();

/**
 * @swagger
 *  components:
 *   schema:
 *     Sessions:
 *      type: array
 *      items:
 *           type: object
 *           items:
 *               type: object
 *               properties:
 *                 term:
 *                    type: integer
 *                 start_date:
 *                    type: Date
 *                 end_date:
 *                    type: Date
 *      example:
 *            term: 2
 *            start_date: 3/10/2020
 *            end_date: 2/3/2021

 */

/**
 * @swagger
 * components:
 *  schema:
 *      sessionsResponse:
 *          type: object
 *          properties:
 *              success:
 *                  type: boolean
 *              success_message:
 *                  type: string
 *                  example: "list of available sessions"
 *              sessions:
 *                  type: array
 *                  items:
 *                      $ref: '#components/schema/Sessions'
 *
 */

/**
 * @openapi
 * /api/sessions:
 *  get:
 *     tags:
 *     - Sessions
 *     summary: Get all sessions
 *     security:
 *     - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: term
 *         schema:
 *            type: integer
 *         required: false
 *         description: get sessions  filtered by terms 
 *       - in: query
 *         name: start_date
 *         schema:
 *            type: Date
 *         required: false
 *         description: get sessions filtered by start_date
 *       - in: query
 *         name: end_date
 *         schema:
 *            type: Date
 *         required: false
 *         description: get sessions filtered by end_date
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schema/sessionsResponse'  

 *       400:
 *         description: Bad request
 */

router.get("/api/sessions", getSessions);
module.exports = router;
