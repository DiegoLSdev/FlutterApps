function handleRequestBeta() {
    const emailInput = document.getElementById("email");
    const messageEl = document.getElementById("message");
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!email) {
      messageEl.textContent = "Please enter your email address.";
      return;
    }
  
    if (!emailRegex.test(email)) {
      messageEl.textContent = "Please enter a valid email address.";
      return;
    }
  
    // Simular validación y registro
    messageEl.textContent = "Request sent, you will soon receive an email. Thank you! 😊";
    emailInput.value = "";
  }
  