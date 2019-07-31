const path = require("path");
const router = require("express").Router();
const userroutes = require("./users");
// Book routes
router.use("/users", userroutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
