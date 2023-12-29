const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./utils/Error");

// Configuration
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./.env" });
}

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SECRET_KEY));
app.use(
  expressSession({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SECRET_KEY,
  })
);

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);

// Routes Import
const users = require("./routes/userRoutes");

app.use(users);

// Middleware for Error Handling
app.use(errorMiddleware);

app.listen(4000, () => {
  console.log("Server is running on PORT 4000");
});
