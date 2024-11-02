// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    console.log("Signup.js loaded");

    // Dummy user storage for demo purposes
    const users = {};

    function handleSignup() {
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;

        if (username && password) {
            if (!users[username]) {
                users[username] = password;
                alert("Signup successful! You can now log in.");
                document.getElementById('signup-username').value = '';
                document.getElementById('signup-password').value = '';
            } else {
                alert("Username already exists. Please choose another one.");
            }
        } else {
            alert("Please enter a valid username and password.");
        }
    }

    function handleLogin() {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (username && password) {
            if (users[username] && users[username] === password) {
                alert("Login successful!");
                displayUserInterface(username);
            } else {
                alert("Invalid username or password.");
            }
        } else {
            alert("Please enter both username and password.");
        }
    }

    function handleLogout() {
        alert("You have been logged out.");
        document.getElementById('auth-section').style.display = 'block';
        document.getElementById('logout-section').style.display = 'none';
    }

    function displayUserInterface(username) {
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('logout-section').style.display = 'block';
        document.getElementById('user-name').textContent = username;
    }

    // Attach functions to the window object so they can be accessed in HTML
    window.handleSignup = handleSignup;
    window.handleLogin = handleLogin;
    window.handleLogout = handleLogout;
});
