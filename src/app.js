const express = require('express');
const path = require('path');
const User = require('../models/user');

const port = process.env.PORT || 3000;
const app = express();

require('../src/db');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/', routes);

app.get('/', (req, res) => {
    res.send('Hello, world!');
  });
  
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/register.html'));
});

app.get('/register.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/register.css'));
});
// app.get('/home', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/home.html'));
//   });
  
// Route for registering a new user
app.post('/register', async (req, res) => {
  const { name, id, grade1,grade2,grade3 } = req.body;

  try {
    const newUser = await User.create({
     name,
     id,
     grade1,
     grade2,
     grade3,
      level: 'starter',
    });

    res.status(201).json({ success: true, data: newUser });
   // res.redirect('/home');
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});


module.exports = app;