const express = require("express");
const { getAdmins } = require("../../controllers/adminController");
const router = express.Router();

/**
 * @swagger
 * /api/admins:
 *  get:
 *    security:              # <--- ADD THIS
 *      - bearerAuth: []     # <--- ADD THIS
 *    tags:
 *      - Admins
 *    description: Returns the list of admins
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: list of admins
 *        schema:
 *            $ref: '#components/schema/adminsResponse'
 */
/**
 * @swagger
 *  components:
 *   schema:
 *     Admins:
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
 *                 password:
 *                    type: string
 *      example:
 *            name: Rashon
 *            phone_number: "0723664765"
 *            email: rashon@example.com
 *            password: 123456
 */

/**
 * @swagger
 * components:
 *  schema:
 *      adminsResponse:
 *          type: object
 *          properties:
 *              success:
 *                  type: boolean
 *              success_message:
 *                  type: string
 *                  example: "list of admins"
 *              admins:
 *                  type: array
 *                  items:
 *                      $ref: '#components/schema/Admins'
 *
 */

/**
 * @openapi
 * /api/admins:
 *  get:
 *     tags:
 *     - Admins
 *     summary: Get all Admins
 *     security:
 *     - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schema/adminsResponse'  

 *       400:
 *         description: Bad request
 */
router.get("/api/admins", getAdmins);
module.exports = router;
