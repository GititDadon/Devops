//import { expect } from "chai";
 //email test

//  function validateEmail(email) {
//     const emailRegex = /\S+@\S+\.\S+/;
//     return emailRegex.test(email);
//   }
  
//  //password test
//   function validatePassword(password) {
//     // Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number
//     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
//     return passwordRegex.test(password);
//   }
  
//   const password = "MyPassword1234!";
//   if (validatePassword(password)) {
//     console.log("Password is valid.");
//   } else {
//     console.log("Password is invalid.");
//     alert("Invalid Password!")

//   }
//    const email = "test@example.com";
//    if (validateEmail(email)) {
//      console.log("Email is valid.");
//    } else {
//      console.log("Email is invalid.");
//      alert("Invalid Email!")

//    }

// Get form element
const form = document.getElementById('login-form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const nameInput = document.getElementById('name');
  const idInput = document.getElementById('id');
  const grade1Input = document.getElementById('grade1');
  const grade2Input = document.getElementById('grade2');
  const grade3Input = document.getElementById('grade3');

  // Perform input tests
  const nameRegex = /^[A-Za-z\s]+$/; // Regex for only alphabetic characters and spaces
  const idRegex = /^\d{9}$/; // Regex for 9-digit ID number
  const gradeRegex = /^([0-9]|[1-9][0-9]|100)$/; // Regex for grades between 0 and 100

  // Validate name input
  if (!nameRegex.test(nameInput.value)) {
    showError(nameInput, 'Please enter a valid full name');
    return;
  }

  // Validate ID input
  if (!idRegex.test(idInput.value)) {
    showError(idInput, 'Please enter a valid 9-digit ID');
    return;
  }

  // Validate grade 1 input
  if (!gradeRegex.test(grade1Input.value)) {
    showError(grade1Input, 'Please enter a valid grade (0-100)');
    return;
  }

  // Validate grade 2 input
  if (!gradeRegex.test(grade2Input.value)) {
    showError(grade2Input, 'Please enter a valid grade (0-100)');
    return;
  }

  // Validate grade 3 input
  if (!gradeRegex.test(grade3Input.value)) {
    showError(grade3Input, 'Please enter a valid grade (0-100)');
    return;
  }

  // If all inputs are valid, submit the form
  form.submit();
});

// Function to display error message for an input field
function showError(input, message) {
  const errorElement = document.createElement('span');
  errorElement.classList.add('error-message');
  errorElement.innerText = message;

  const parentElement = input.parentElement;
  parentElement.appendChild(errorElement);
}

// Remove error message when the input value changes
form.addEventListener('input', function(event) {
  const input = event.target;
  const errorElement = input.parentElement.querySelector('.error-message');
  if (errorElement) {
    errorElement.remove();
  }
});
