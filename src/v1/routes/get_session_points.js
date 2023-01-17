/**
 * @swagger
 *  components:
 *   schema:
 *     sessionPoints:
 *      type: array
 *      items:
 *           type: object
 *           items:
 *               type: object
 *               properties:
 *                 session_id:
 *                    type: integer
 *                 student_id:
 *                    type: integer
 *                 points:
 *                    type: integer
 *      example:
 *            session_id: 3
 *            student_id: 89
 *            points: 70
 *            comment: suspension
 */

/**
 * @swagger
 * components:
 *  schema:
 *      sessionPointsResponse:
 *          type: object
 *          properties:
 *              success:
 *                  type: boolean
 *              success_message:
 *                  type: string
 *                  example: "list of session records"
 *              session:
 *                  type: array
 *                  items:
 *                      $ref: '#components/schema/sessionPoints'
 *
 */

/**
 * @openapi
 * /api/session-points:
 *  get:
 *     tags:
 *     - sessionPoints
 *     summary: Get all session's points
 *     security:
 *     - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schema/sessionPointsResponse'  

 *       400:
 *         description: Bad request
 */
