//import { expect } from "chai";
 //email test

 function validateEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }
  
 //password test
  function validatePassword(password) {
    // Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return passwordRegex.test(password);
  }
  
  const password = "MyPassword1234!";
  if (validatePassword(password)) {
    console.log("Password is valid.");
  } else {
    console.log("Password is invalid.");
    alert("Invalid Password!")

  }
   const email = "test@example.com";
   if (validateEmail(email)) {
     console.log("Email is valid.");
   } else {
     console.log("Email is invalid.");
     alert("Invalid Email!")

   }