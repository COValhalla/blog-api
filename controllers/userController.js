const Users = require('../models/Users');

exports.user_list = (req, res) => {
  res.send('NOT IMPLEMENTED: User list');
};

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }

  // Create a User
  const user = new Users({
    username: req.body.username.value,
    password: req.body.password,
    status: 'visitor',
  });

  // Save User in the database
  Users.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User.',
      });
    else res.send(data);
  });
};
