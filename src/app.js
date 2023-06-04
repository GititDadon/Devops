const express = require('express');
const path = require('path');
const User = require('../models/user');

const app = express();

require('../src/db');
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/', routes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/register.html'));
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
    res.redirect('/home.html');
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);})

module.exports = app;