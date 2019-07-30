const db = require("../models");

// Defining methods for the bookController
module.exports = {
  create: function(req, res) {
    console.log('req.body:', req.body)
    db.User.create(req.body)
      .then(dbUser => {
        console.log('dbuser:', dbUser);
        return res.json(dbUser)
      })
      .catch(err => res.status(422).json(err));
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