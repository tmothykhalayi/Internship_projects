// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
  
  // Form Validation for Contact Form
  document.querySelector('form').addEventListener('submit', function(e) {
    let isValid = true;
  
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
  
    // Clear previous errors
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(error => error.remove());
  
    // Name validation
    if (name.value.trim() === "") {
      isValid = false;
      showError(name, "Name is required");
    }
  
    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value.trim())) {
      isValid = false;
      showError(email, "Please enter a valid email address");
    }
  
    // Message validation
    if (message.value.trim() === "") {
      isValid = false;
      showError(message, "Message cannot be empty");
    }
  
    // If form is invalid, prevent submission
    if (!isValid) {
      e.preventDefault();
    }
  });
  
  // Function to display error messages
  function showError(inputElement, message) {
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("error");
    errorMessage.style.color = "red";
    errorMessage.innerText = message;
    inputElement.parentElement.appendChild(errorMessage);
  }
  
  // Toggle Navigation Menu for Mobile
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
  