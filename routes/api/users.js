const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  // .get(userController.findAll)
  .post(userController.create);

router.route('/login')
  .post(userController.findUser);

router.route('/charge')
  .post(userController.chargePayment);

// Matches with "/api/users/:id"
// router
//   .route("/:id")
//   .get(userController.findById)
//   .put(userController.update)
//   .delete(userController.remove);

module.exports = router;
