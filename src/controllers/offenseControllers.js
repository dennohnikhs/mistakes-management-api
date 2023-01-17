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
module.exports = { addOffense };
