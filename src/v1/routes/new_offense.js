const express = require("express");
const addNewRecord = require("../../controllers/addNewRecord");
const router = express.Router();
/**
 * @openapi
 * /api/offense/new:
 *  post:
 *     tags:
 *     - Offense
 *     summary: add new offense
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - teacher_id
 *              - offense_type_id
 *              - student_id
 *              - comment
 *              - points_deducted
 *              - week
 *            properties:
 *              teacher_id:
 *                type: integer
 *              offense_type_id:
 *                type: integer
 *              student_id:
 *                type: integer
 *              comment:
 *                type: string
 *              points_deducted:
 *                type: integer
 *              week:
 *                type: integer
 *            example:
 *              teacher_id: 87
 *              offense_type_id: 2
 *              student_id: 4
 *              comment: ""
 *              week: 1
 *     responses:
 *      200:
 *        description: Ok
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */

router.post("/api/offense/new", addNewRecord);
module.exports = router;
