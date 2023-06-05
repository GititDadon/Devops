const express = require('express');
const path = require('path');
const User = require('../models/user');
const { isFullNameValid, isIdValid, areGradesValid } = require('../tests/register');

const app = express();
require('../src/db');
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/register.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/register.html'));
});

app.get('/register.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/register.css'));
});

app.get('/home.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/home.css'));
});

// Route for registering a new user
app.post('/register', async (req, res) => {
  const { name, id, grade1, grade2, grade3 } = req.body;
  const grades = [grade1, grade2, grade3];

  // Perform input validation
  if (!isFullNameValid(name)) {
    return res.status(400).json({ success: false, error: 'Invalid full name' });
  }

  if (!isIdValid(id)) {
    return res.status(400).json({ success: false, error: 'Invalid ID' });
  }

  if (!areGradesValid(grades)) {
    return res.status(400).json({ success: false, error: 'Invalid grades' });
  }

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
//gffdg
// Route to retrieve grades
app.get('/api/grades', async (req, res) => {
  try {
    // Retrieve the grades from the database
    const user = await User.findOne().sort({ createdAt: -1 }).limit(1);


    // Construct the grades object
    const grades = {
      grade1: user.grade1,
      grade2: user.grade2,
      grade3: user.grade3
    };
    // Send the grades as a JSON response
    res.json({ success: true, data: grades });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});


if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

module.exports = { app };
