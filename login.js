document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from refreshing the page

        // Get input values
        var username = document.getElementById("name").value.trim();
        var password = document.getElementById("password").value.trim();

        // Dummy credentials (Replace with a backend authentication system)
        var validUsername = "admin";
        var validPassword = "1234";

        if (username === validUsername && password === validPassword) {
            alert("Login successful!");
            window.location.href = "dashboard.html"; // Redirect to dashboard
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
