const Users = require('../models/Users');
const passport = require('passport');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

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
      passport.authenticate(
        'local',
        { session: false },
        function (err, user, info) {
          if (err) {
            return next(err);
          }
          if (!user) {
            return res
              .status(400)
              .json({ errors: 'Username or password is incorrect' });
          }
          req.logIn(user, { session: false }, function (err) {
            if (err) {
              return next(err);
            }

            // Create JWT
            const token = jwt.sign(
              { id: user._id, username: user.username },
              process.env.JWT_SECRET,
              { expiresIn: '1h' },
            );
            return res.status(201).json({ user, token });
          });
        },
      )(req, res, next);
    });
  });
};
