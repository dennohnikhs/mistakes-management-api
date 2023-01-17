const express = require("express");
const { addSession } = require("../../controllers/sessionController");
const router = express.Router();
/**
 * @openapi
 * /api/session/new:
 *  post:
 *     tags:
 *     - Session
 *     summary: add new session
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - term
 *              - start_date
 *              - end_date
 *            properties:
 *              term:
 *                type: integer
 *              start_date:
 *                type: Date
 *              end_date:
 *                type: Date
 *            example:
 *              term: 2
 *              start-date: 10/8/2022
 *              end-date: 28/12/2022
 *     responses:
 *      200:
 *        description: Ok
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */

router.post("/api/session/new", addSession);
module.exports = router;
