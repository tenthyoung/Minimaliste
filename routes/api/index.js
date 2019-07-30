const path = require("path");
const router = require("express").Router();
const userroutes = require("./users");
const googleRoutes = require("./google");

// Book routes
router.use("/users", userroutes);

// Google Routes
router.use("/google", googleRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
