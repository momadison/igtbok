require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
// Passport Imports
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const session = require('express-session')
// DB Imports
const db = require('./models')

const PORT = process.env.PORT || 3001;
const app = express();


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

mongoose.connect("mongodb://localhost/igtbok", { useNewUrlParser: true });

// Passport functionality
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.NODE_ENV === 'production' ? "https://heroku.com/auth/google/callback" : "https://localhost:3000/auth/google/callback",
  scope: ['email']
},
function(accessToken, refreshToken, profile, done) {
  var userEmail = profile.emails[0].value
  var username = userEmail.slice(0, userEmail.indexOf('@'))
  console.log(`${userEmail} : ${username}`)
  done(null, user)
  // db.User.findOrCreate({
  //   where: {
  //     userName: username,
  //     email: userEmail,
  //     googleId: profile.id
  //   }
  // }).spread(function (userResult, created) {
  //   console.log(userResult.dataValues.id)
  //   if(created){
  //     return done(null, userResult.dataValues.id)
  //   } else {
  //     return done(null, userResult.dataValues.id);
  //   }
  // }).catch(function(err) {
  //   console.log(err)
  // })
}))
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.NODE_ENV === 'production' ? "https://heroku.com/auth/facebook/callback" : "https://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, user)
    // User.findOrCreate(..., function(err, user) {
    //   if (err) { return done(err); }
    //   done(null, user);
    // });
  }
));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}))
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// Authentication for routes using passport
const accessProtectionMiddleware = (req, res, next) => {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.redirect('/')
  }
}

// Define API routes here
require("./routes/api/authentication")(app, accessProtectionMiddleware);
app.use(routes);

// Send every other request to the React app

// Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/venuesDB")

// Define any API routes before this runs
// app.get("*", (req, res) => {
//   console.log("this is a test");
//   res.sendFile(path.join(__dirname, "client/public/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
