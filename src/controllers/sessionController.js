const { validateAddSession } = require("../utils/validator/validateAddSession");
const Session = require("../models/session/session");

async function addSession(req, res) {
  try {
    const validationResult = await validateAddSession(req);
    if (!validationResult.isValid) {
      return res.json({
        success: false,
        success_message: validationResult.message,
      });
    }

    await Session.AddOne(req.body.term, req.body.start_date, req.body.end_date);
    return res.json({
      success: true,
      success_message: "session added successfully",
    });
  } catch (error) {
    {
      console.log("Error while trying to add session");
      console.log({ error });
      res.json({
        success: false,
        success_message:
          "Oops!!! an error occurred while trying to add session.",
      });
    }
  }
}
async function getSessions(req, res) {
  try {
    let result = await Session.getAll();
    return res.json({
      success: true,
      success_message: "School sessions",
      list_of_sessions: result,
    });
  } catch (error) {
    {
      console.log("Error while trying to get sessions");
      console.log({ error });
      res.json({
        success: false,
        success_message:
          "Oops!!! an error occurred while trying to get sessions",
      });
    }
  }
}
module.exports = { addSession, getSessions };
