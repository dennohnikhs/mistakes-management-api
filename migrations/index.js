const { createAdminTable } = require("./create_table_admin");
const { createOffenseTable } = require("./create_table_offense");
const { createOffenseTypeTable } = require("./create_table_offense_type");
const { createSessionTable } = require("./create_table_session");
const { createSessionPoints } = require("./create_table_session_points");
const { createStudentsTable } = require("./create_table_student");
const { createTableTeacher } = require("./create_table_teacher");
const { setDefaultPoints } = require("./set_default_points");

(async () => {
  await createStudentsTable();
  await createOffenseTable();
  await createOffenseTypeTable();
  await createAdminTable();
  await createSessionTable();
  await createSessionPoints();
  await createTableTeacher();
  await setDefaultPoints();
})();
