const express = require("express");
const addStudentRoutes = require("./new_student");
const loginRoutes = require("./login");
const addTeacherRoutes = require("./new_teacher");
const getStudentsRoutes = require("./get_students");
const getAdminsRoutes = require("./get_admins");
const addAdminRoutes = require("./new_admin");
const getAllTeachersRoutes = require("./get_teachers");
const addOffenseTypeRoutes = require("./new_offense_type");
const getOffenseTypes = require("./get_offense_type");
const addSessionRoutes = require("./new_session");
const getSessionsRoutes = require("./get-sessions");
const addOffenseRoutes = require("./new_offense");
const addNewOffenseRouter = require("./new_offense");
const getAllOffenseRecords = require("./get_offense_records");
const deleteAdminRoutes = require("./delete_admin");
const updateAdminRoutes = require("./edit_admin");
const searchAdminByEmailRoutes = require("./search_admin");
const searchTeacherByEmailRoutes = require("./search_teacher");
const editTeacherRoutes = require("./edit_teacher");
const deleteTeacherRoutes = require("./delete_teacher");
const deleteStudentRoutes = require("./delete_student");
const editStudentRoutes = require("./edit_student");
const router = express.Router();

/**
 * @openapi
 * /Healthcheck:
 *  get:
 *     tags:
 *     - Healthcheck
 *     description: API operational status
 *     responses:
 *       200:
 *         description: API is  running
 */
router.get("/healthcheck", (req, res) => res.sendStatus(200));
router.use(addStudentRoutes);
router.use(loginRoutes);
router.use(addTeacherRoutes);
router.use(getStudentsRoutes);
router.use(addAdminRoutes);
router.use(getAdminsRoutes);
router.use(getAllTeachersRoutes);
router.use(addOffenseTypeRoutes);
router.use(getOffenseTypes);
router.use(addSessionRoutes);
router.use(getSessionsRoutes);
router.use(addOffenseRoutes);
router.use(addNewOffenseRouter);
router.use(getAllOffenseRecords);
router.use(deleteAdminRoutes);
router.use(updateAdminRoutes);
router.use(searchAdminByEmailRoutes);
router.use(searchTeacherByEmailRoutes);
router.use(editTeacherRoutes);
router.use(deleteTeacherRoutes);
router.use(deleteStudentRoutes);
router.use(editStudentRoutes);

module.exports = router;
