const Offense = require("../models/offense/offense");
const { validateAddOffense } = require("../utils/validator/validate_offense");

async function addOffense(req, res) {
  try {
    const validationResult = await validateAddOffense(req);
    if (!validationResult) {
      return res.json({
        success: false,
        message: validationResult.message,
      });
    }
    await Offense.addOne(
      req.body.Offense_type_id,
      req.body.student_id,
      req.body.comment
    );
    // await SessionPoints.deductPoints(req.body.student_id)
    res.json({
      success: true,
      message: "Offense added successfully",
    });
  } catch (error) {
    console.log({ error });
    console.log("Error while trying to add new offense");
    return res.json({
      message: "Error while trying to add new offense",
      success: false,
    });
  }
}

async function getOffenseRecords(req, res) {
  try {
    let result = await Offense.getAll();
    return res.json({
      success: true,
      success_message: "Students Records",
      list_of_sessions: result,
    });
  } catch (error) {
    {
      console.log("Error while trying to get Records");
      console.log({ error });
      res.json({
        success: false,
        success_message:
          "Oops!!! an error occurred while trying to get Records",
      });
    }
  }
}
module.exports = { addOffense, getOffenseRecords };
