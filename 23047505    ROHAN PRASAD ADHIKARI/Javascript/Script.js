// This script is for contact us form. It throws a alert msg if any textarea field is empty.
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all required fields.");
      return false;
    }
  
    return true;
  }
  