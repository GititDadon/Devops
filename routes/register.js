var express = require('express');
const User = require('../models/user');
const mongoose = require('mongoose');
var router = express.Router();

/* GET users listing. */
router.post('/', async function (req, res, next) {
  console.log(req.body);

  // Register the user in the database
  // We decided if the username exist - update
  try {
    const newUser = await User.findOneAndUpdate({
      username: req.body.name
    },
      Object.assign(req.body, {
        level: 'starter',
      }));

    res.status(200).json({
      success: true,
      data: newUser
    });
    res.redirect('/login');
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

module.exports = router;