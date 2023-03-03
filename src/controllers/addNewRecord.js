const Offense = require("../models/offense/offense");
const OffenseType = require("../models/offense_type/offense_type");
const Session = require("../models/session/session");
const SessionPoints = require("../models/session_points/session_points");
const getWeek = require("../utils/validator/get_week");
const {
  validateNewOffense,
} = require("../utils/validator/validate_add_new_record");

async function addNewRecord(req, res) {
  try {
    const validationResult = await validateNewOffense(req);
    if (!validationResult) {
      return res.json({
        success: false,
        message: validationResult.message,
      });
    }
    const teacherId = req.body.currentTeacherId;

    if (!teacherId) {
      return res.json({
        success: false,
        success_message: "Only teachers can add an offense",
      });
    }
    const points = await OffenseType.getPoints(req.body.offense_type_id);

    if (!points) {
      return res.json({
        success: false,
        success_message: "invalid offense_type_id provided",
      });
    }

    const currentSessionId = await Session.getSession();

    if (!currentSessionId) {
      return res.json({
        success: false,
        success_message: "session not found",
      });
    }

    const getSessionStartDate = await Session.sessionStartDate();
    console.log(getSessionStartDate);

    const currentWeek = await getWeek(getSessionStartDate);

    if (!currentWeek) {
      return res.json({
        success: false,
        success_message: "Cannot get current week",
      });
    }
    const addNewStudentRecord = await Offense.newRecord(
      teacherId,
      req.body.offense_type_id,
      req.body.student_id,
      req.body.comment,
      points,
      currentWeek
    );

    if (!addNewStudentRecord)
      return res.json({
        success: false,
        success_message: "Cannot add offense details",
      });
    const recordForIdExists = await SessionPoints.checkForIdExists(
      req.body.student_id
    );

    if (!recordForIdExists) {
      const sessionPointNewUpdate =
        await SessionPoints.addNewSessionPointsRecord(
          points,
          req.body.student_id,
          currentSessionId
        );

      if (!sessionPointNewUpdate)
        return res.json({
          success: false,
          success_message: "Error adding student session points information",
        });
    } else {
      const isStudentIdExisting = await SessionPoints.updateExistingRecord(
        points,
        req.body.student_id
      );

      if (!isStudentIdExisting)
        return res.json({
          success: false,
          success_message: "Error updating student session points information",
        });
      return res.json({
        success: true,
        success_message: "Student offense record added successfully",
      });
    }
  } catch (error) {
    console.log("Error trying to add new offense record");
    console.log(error);
    return res.json({
      success: false,
      success_message: "Failed to add student offense record try again later",
    });
  }
}
module.exports = addNewRecord;
