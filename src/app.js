const express = require('express');
const path = require('path');
const User = require('../models/user');

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
    res.redirect("home.html");
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});
// Route to retrieve grades
app.get('/api/grades', async (req, res) => {
  try {
    // Retrieve the grades from the database
    const user = await User.findOne({  })
    .sort({ createdAt: -1 }) 
      .limit(1); 
    ;
    
    // Check if the user and grades exist
    if (!user || !user.grade1 || !user.grade2 || !user.grade3) {
      return res.status(404).json({ success: false, message: 'Grades not found' });
    }
    
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

app.listen(port, () => {
    console.log(`Listening on port ${port}`);})

module.exports = app;