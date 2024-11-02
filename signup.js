// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    console.log("Signup.js loaded");

    // Dummy user storage for demo purposes
    const users = {};

    function toggleAuthForms() {
        const signupForm = document.getElementById('signup');
        const loginForm = document.getElementById('login');

        signupForm.classList.toggle('hidden');
        loginForm.classList.toggle('hidden');
    }

    function handleSignup() {
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        if (username && email && password) {
            if (!users[username]) {
                users[username] = { email, password };
                alert("Signup successful! You can now log in.");
                document.getElementById('signup-username').value = '';
                document.getElementById('signup-email').value = '';
                document.getElementById('signup-password').value = '';
            } else {
                alert("Username already exists. Please choose another one.");
            }
        } else {
            alert("Please enter valid username, email, and password.");
        }
    }

    function handleLogin() {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (username && password) {
            if (users[username] && users[username].password === password) {
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
        document.getElementById('zodiac-container').classList.add('hidden');
        document.getElementById('auth-container').classList.remove('hidden');
    }

    function displayUserInterface(username) {
        document.getElementById('auth-container').classList.add('hidden');
        document.getElementById('zodiac-container').classList.remove('hidden');
        document.getElementById('user-name').textContent = username;
    }

    // Attach functions to the window object so they can be accessed in HTML
    window.handleSignup = handleSignup;
    window.handleLogin = handleLogin;
    window.handleLogout = handleLogout;
    window.toggleAuthForms = toggleAuthForms;
});
