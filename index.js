const express = require("express");
const authRoutes = require("./routes/auth-routes.js");
const passportSetup = require("./config/passport-setup.js");

const app = express();

app.set("view engine", "ejs");

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(8080, () => {
  console.log("App running on port 8080");
});
