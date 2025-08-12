document.addEventListener("DOMContentLoaded", function () {
  // Function to display messages at bottom-right
  function showMessage(message, type) {
    let messageBox = document.createElement("div");
    messageBox.classList.add(
      "fixed",
      "bottom-4",
      "right-4",
      "p-4",
      "rounded-lg",
      "shadow-lg",
      "transition-opacity",
      "opacity-100",
      "duration-500"
    );

    if (type === "success") {
      messageBox.classList.add("bg-green-500", "text-white");
    } else {
      messageBox.classList.add("bg-red-500", "text-white");
    }

    messageBox.innerHTML = message;
    document.body.appendChild(messageBox);

    // Remove message after 3 seconds
    setTimeout(() => {
      messageBox.classList.add("opacity-0");
      setTimeout(() => messageBox.remove(), 500);
    }, 3000);
  }

  // Login Function
  function login(event) {
    event.preventDefault(); // Prevent form submission

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let storedUser = JSON.parse(localStorage.getItem(email)); // Retrieve user by email

    if (storedUser && storedUser.password === password) {
      showMessage("✅ Login successful! Redirecting...", "success");

      setTimeout(() => {
        window.location.href = "home.html"; // Redirect to dashboard
      }, 1500);
    } else {
      showMessage("❌ Incorrect email or password.", "error");
    }
  }

  // Attach event listener to the login button
  document.getElementById("login-btn").addEventListener("click", login);
});
