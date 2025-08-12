document.addEventListener("DOMContentLoaded", function () {
  // Function to display messages at bottom-right
  function showMessage(message, type) {
    let messageBox = document.createElement("div");
    messageBox.classList.add(
      "fixed", "bottom-4", "right-4", "p-4", "rounded-lg", "shadow-lg",
      "transition-opacity", "opacity-100", "duration-500"
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

  // Signup Function
  function signup(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value; 
    let confirmpassword = document.getElementById("confirm-password").value;   

    if (name && email && password && confirmpassword) {
      let user = { name, email, password };
      if (localStorage.getItem(email)) {
        showMessage("❌ Account with this email already exists.", "error");
        return;
      } else {
        if(password !== confirmpassword) {
          showMessage("❌ Passwords do not match.", "error");
          return;}
        else{
          localStorage.setItem(email, JSON.stringify(user)); // Store user with email as key
        console.log(user);
        showMessage("✅ Account created successfully!", "success");

        setTimeout(() => {
          window.location.href = "login.html"; // Redirect to login page
        }, 1500);
        } 
      }
    } else {
      showMessage("❌ Please fill in all fields.", "error");
    }
  }

  // Attach event listener to the signup button
  document.getElementById("signup-btn").addEventListener("click", signup);
});
