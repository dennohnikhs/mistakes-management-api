const express = require("express");
const dotenv = require("dotenv");
// const cors = require("cors");

const app = express();
dotenv.config({ path: ".env" });
const v1Router = require("./src/v1/routes/index");
const swaggerDocs = require("./swagger");
const authMiddleware = require("./src/middleware/auth-middleware");
// app.use(
//   cors({
//     origin: "*",
//     methods: ["GET", "POST"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.use(express.json());
app.use(authMiddleware);
app.use(v1Router);
const port = process.env.PORT || 5500;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
  swaggerDocs(app, port);
});
