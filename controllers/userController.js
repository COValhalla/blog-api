const Users = require('../models/Users');
const passport = require('passport');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

exports.user_list = (req, res) => {
  res.send('NOT IMPLEMENTED: User list');
};

// Create and Save a new User
exports.create = async (req, res, next) => {
  // Check unique username
  const user = await Users.findOne({
    username_lower: req.body.username.toLowerCase(),
  });
  if (user) {
    return res.status(400).json({ errors: 'Username already exists' });
  }

  // Hash password and save user
  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
    if (err) {
      return next(err);
    }
    const user = new Users({
      username: req.body.username,
      username_lower: req.body.username.toLowerCase(),
      password: hashedPassword,
      status: 'visitor',
    }).save(function (err) {
      if (err) {
        return next(err);
      }
      // Successful - rediredct to new user record.
      passport.authenticate('local', function (err, user, info) {
        if (err) {
          return next(err);
        }
        if (!user) {
          return res
            .status(400)
            .json({ errors: 'Username or password is incorrect' });
        }
        req.logIn(user, function (err) {
          if (err) {
            return next(err);
          }
          return res.status(201).json({ user: user });
        });
      })(req, res, next);
    });
  });
};
