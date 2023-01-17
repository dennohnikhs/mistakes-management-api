const OffenseType = require("../models/offense_type/offense_type");
const {
  validateAddOffenseType,
} = require("../utils/validator/validate_add_offense_type");

async function addOffenseType(req, res) {
  try {
    const validationResult = await validateAddOffenseType(req);
    if (!validationResult.isValid) {
      return res.json({
        success: false,
        error_message: validationResult.message,
      });
    }

    await OffenseType.addOne(req.body.name, req.body.points);
    return res.json({
      success: true,
      success_message: "Offense type added successfully",
    });
  } catch (error) {
    {
      console.log("Error while trying to add  offense");
      console.log({ error });
      res.json({
        success: false,
        success_message:
          "Oops!!! an error occurred while trying to add new offense type.",
      });
    }
  }
}
async function getAllOffenseTypes(req, res) {
  try {
    const query = req.query.q;
    let result = await OffenseType.getAll(query);
    return res.json({
      success: true,
      success_message: "list of offense types",
      list_of_offense_type: result,
    });
  } catch (error) {
    {
      console.log("Error while trying to get offense types");
      console.log({ error });
      res.json({
        success: false,
        success_message:
          "Oops!!! an error occurred while trying to get offense types",
      });
    }
  }
}
module.exports = { addOffenseType, getAllOffenseTypes };
