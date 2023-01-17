const express = require("express");
const router = express.Router();
/**
 * @openapi
 * /api/session-offences/new:
 *  post:
 *     tags:
 *     - sessionOffence
 *     summary: add new session offence
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - session_id
 *              - student_id
 *              - points
 *            properties:
 *              session_id:
 *                type: integer
 *              student_id:
 *                type: integer
 *              points:
 *                type: integer
 *            example:
 *              session_id: 1
 *              student_id: 67
 *              points: 85
 *     responses:
 *      200:
 *        description: Ok
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */

router.post("/api/session-offence/new");
module.exports = router;
