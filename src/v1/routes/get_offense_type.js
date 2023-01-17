const express = require("express");
const {
  getAllOffenseTypes,
} = require("../../controllers/offenseTypeController");
const router = express.Router();

/**
 * @swagger
 *  components:
 *   schema:
 *     OffenseTypes:
 *      type: array
 *      items:
 *           type: object
 *           items:
 *               type: object
 *               properties:
 *                 name:
 *                    type: string
 *                 points:
 *                    type: integer
 *      example:
 *            name: drug abuse
 *            points: 10
 */

/**
 * @swagger
 * components:
 *  schema:
 *      offenseTypeResponse:
 *          type: object
 *          properties:
 *              success:
 *                  type: boolean
 *              success_message:
 *                  type: string
 *                  example: "list of offense types"
 *              offense_types:
 *                  type: array
 *                  items:
 *                      $ref: '#components/schema/OffenseTypes'
 *
 */

/**
 * @openapi
 * /api/offense_type:
 *  get:
 *     tags:
 *     - offenseType
 *     summary: Get all offense types
 *     security:
 *     - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schema/offenseTypeResponse'  

 *       400:
 *         description: Bad request
 */
router.get("/api/offense_type", getAllOffenseTypes);
module.exports = router;
