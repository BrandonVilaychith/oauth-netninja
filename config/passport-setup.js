// Imports
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys.js");

// Attach google straregy config to passport
passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/google/redirect",
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret
    },
    () => {}
  )
);
