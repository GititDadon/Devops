const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
// Connect to MongoDB
mongoose.connect('mongodb+srv://tairmazuz19:0532217639@nosecl.evkn28f.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Failed to connect to MongoDB:', error));

// Create a schema for user information
const userSchema = new mongoose.Schema({
  name: String,
  id: String,
  grade1: String,
  grade2: String,
  grade3: String
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handle form submission
app.post('/register', (req, res) => {
  const { name, id, grade1, grade2, grade3 } = req.body;
  const newUser = new User({ name, id, grade1, grade2, grade3 });

  newUser.save()
    .then(() => {
      res.send('User information saved successfully');
    })
    .catch(error => {
      console.error('Failed to save user information:', error);
      res.status(500).send('Failed to save user information');
    });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
