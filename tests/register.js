// inputValidation.js
const isFullNameValid = (fullName) => {
    // Check if the full name contains only letters and spaces
    return /^[A-Za-z\s]+$/.test(fullName);
  };
  
  
  const isIdValid = (id) => {
    // Check if the ID contains exactly 9 digits
    return /^\d{9}$/.test(id);
  };
  
  const areGradesValid = (grades) => {
    // Check if each grade is a maximum of 3 digits and not negative
    for (const grade of grades) {
      if (grade < 0 || grade > 100) {
        return false;
      }
    }
    return true;
  };
  
  module.exports = {
    isFullNameValid,
    isIdValid,
    areGradesValid,
  };
  