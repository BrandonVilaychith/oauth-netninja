const router = require("express").Router();
const passport = require("passport");

// auth login
router.get("/login", (req, res) => {
  res.render("login");
});

// auth logout
router.get("/logout", (req, res) => {
  // handle with passport
  res.send("Logging out");
});

// auth with google
router.get(
  "/google",
  passport.authenticate("google", {
    // Tells passport what information we want from the user
    scope: ["profile"]
  })
);

module.exports = router;
