const express = require("express");
const { addOffenseType } = require("../../controllers/offenseTypeController");
const router = express.Router();
/**
 * @openapi
 * /api/offense-type/new:
 *  post:
 *     tags:
 *     - offense-type
 *     summary: add new offense type
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - points
 *            properties:
 *              name:
 *                type: string
 *              points:
 *                type: integer
 *            example:
 *              name: sleeping in class
 *              points: 10
 *     responses:
 *      200:
 *        description: Ok
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */

router.post("/api/offense-type/new", addOffenseType);
module.exports = router;
