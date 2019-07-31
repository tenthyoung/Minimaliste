const db = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10; // this is for bcrypt to further secure our passwords


module.exports = {
  create: function (req, res) {
    console.log('req.body:', req.body)

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
    console.log('req.body', req.body);
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
  }
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