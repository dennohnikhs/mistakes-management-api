const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const http = require("http");

dotenv.config({ path: ".env" });
const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
const v1Router = require("./src/v1/routes/index");
const swaggerDocs = require("./swagger");
const authMiddleware = require("./src/middleware/auth-middleware");
app.get("/", (req, res) => {
  res.send("The application is up and the server is started");
});
app.use(express.json());
app.use(cookieParser());
const server = http.createServer(app);
app.use(express.urlencoded({ extended: true }));
app.use(authMiddleware);
app.use(v1Router);
const port = process.env.PORT || 5500;

server.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
  swaggerDocs(app, port);
});
