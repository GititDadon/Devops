// Fetch user data from the server 
fetch('/register')
  .then(response => response.json())
  .then(data => {
    // Extract the grades from the user data
    var grade1 = data.grade1;
    var grade2 = data.grade2;
    var grade3 = data.grade3;

    // Set the grades in the HTML table
    document.getElementById("grade1").textContent = grade1;
    document.getElementById("grade2").textContent = grade2;
    document.getElementById("grade3").textContent = grade3;
  })
  .catch(error => {
    console.log(error);
  });
