// the dotenv file is a hidden file where we keep the code that
// encrypts are keys. And don't let the dotenv file onto github!
require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/productDB",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on http://localhost:${PORT}`)
);
