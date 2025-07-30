function validateEmail() {
    const email = document.getElementById("emailInput").value.trim();
    const result = document.getElementById("result");

    if (!email) {
      result.innerText = "⚠️ Please enter an email address!";
      result.className = "invalid";
      return;
    }

    // Check for "@" and "."
    const hasAt = email.includes("@");
    const hasDot = email.includes(".");
    const atIndex = email.indexOf("@");
    const dotIndex = email.lastIndexOf(".");

    if (hasAt && hasDot && atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1) {
      result.innerText = "✅ Valid Email Address!";
      result.className = "valid";
    } else {
      result.innerText = "❌ Invalid Email Address!";
      result.className = "invalid";
    }
  }