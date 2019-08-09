const db = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10; // this is for bcrypt to further secure our passwords
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = {
  create: function (req, res) {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      const newUser = new db.User({
        name: req.body.name,
        email: req.body.email,
        password: hash
      });

      newUser.save(function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('User added!')
        }
      });
    });
  },
  findUser: function (req, res) {
    db.User.findOne({ email: req.body.email }, function (err, foundUser) {
      if (err) {
        console.log(err);
      } else {
        if (foundUser) {
          bcrypt.compare(req.body.password, foundUser.password, function(error, result) {
            if(result === true) {
              console.log('You logged in!');
            } else {
              console.log(error);
            }
          });
        }
      }
    });
  },
  chargePayment: async (req, res) => {
    try {
      let {status} = await stripe.charges.create({
        // amount: 2000,
        amount: req.body.totalBill * 100,
        currency: "usd",
        description: "An example charge",
        // source: req.body
        source: req.body.id
      });
      console.log("Payment successfully charged via Stripe API")
  
      res.json({status});
    } catch (err) {
      console.log(err)
      res.status(500).end();
    }
  },
};
//   findAll: function(req, res) {
//     db.Book.find(req.query)
//       .then(dbBook => res.json(dbBook))
//       .catch(err => res.status(422).json(err));
//   },
//   findById: function(req, res) {
//     db.Book.findById(req.params.id)
//       .then(dbBook => res.json(dbBook))
//       .catch(err => res.status(422).json(err));
//   },

//   update: function(req, res) {
//     db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
//       .then(dbBook => res.json(dbBook))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.Book.findById(req.params.id)
//       .then(dbBook => dbBook.remove())
//       .then(dbBook => res.json(dbBook))
//       .catch(err => res.status(422).json(err));
//   }

  //   db.User.create(req.body)
  //   .then(dbUser => {
  //       console.log('dbuser:', dbUser);
  //       return res.json(dbUser)
  //     })
  //     .catch(err => res.status(422).json(err));
  // },