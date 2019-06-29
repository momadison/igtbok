const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Define API routes here
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
