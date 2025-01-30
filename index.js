document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registerForm").addEventListener("submit", function(event) {
      event.preventDefault();
  
      let isValid = true;
  
      function showError(input, message) {
        const errorMsg = input.nextElementSibling;
        errorMsg.textContent = message;
        errorMsg.style.color = "red";
        isValid = false;
      }
  
      function clearError(input) {
        const errorMsg = input.nextElementSibling;
        errorMsg.textContent = "";
      }
  
      // Get form values
      const firstName = document.getElementById("firstName");
      const lastName = document.getElementById("lastName");
      const email = document.getElementById("email");
      const dob = document.getElementById("dob");
      const password = document.getElementById("password");
      const confirmPassword = document.getElementById("confirmPassword");
      const agreeTerms = document.getElementById("agreeTerms");
  
      // Validation
      if (firstName.value.trim() === "") {
        showError(firstName, "First name is required.");
      } else {
        clearError(firstName);
      }
  
      if (lastName.value.trim() === "") {
        showError(lastName, "Last name is required.");
      } else {
        clearError(lastName);
      }
  
      if (email.value.trim() === "" || !email.value.includes("@")) {
        showError(email, "Enter a valid email.");
      } else {
        clearError(email);
      }
  
      if (dob.value.trim() === "") {
        showError(dob, "Date of birth is required.");
      } else {
        clearError(dob);
      }
  
      if (password.value.trim().length < 6) {
        showError(password, "Password must be at least 6 characters.");
      } else {
        clearError(password);
      }
  
      if (confirmPassword.value.trim() !== password.value.trim()) {
        showError(confirmPassword, "Passwords do not match.");
      } else {
        clearError(confirmPassword);
      }
  
      if (!agreeTerms.checked) {
        showError(agreeTerms, "You must agree to the terms.");
      } else {
        clearError(agreeTerms);
      }
  
      // If all fields are valid, submit the form
      if (isValid) {
        alert("Form submitted successfully!");
        this.submit();
      }
    });
  });
  