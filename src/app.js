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
     // Insert the grades into the table
     const gradesTable = document.getElementById('grades-table');
     const newRow = gradesTable.insertRow();
     
     const grade1Cell = newRow.insertCell();
     grade1Cell.textContent = newUser.grade1;
     
     const grade2Cell = newRow.insertCell();
     grade2Cell.textContent = newUser.grade2;
     
     const grade3Cell = newRow.insertCell();
     grade3Cell.textContent = newUser.grade3;
    res.redirect('/home.html');
    module.exports=newUser;

  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);})

module.exports = app;