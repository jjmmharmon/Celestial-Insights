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
        const password = document.getElementById('signup-password').value;

        if (username && password) {
            if (!users[username]) {
                users[username] = password;
                alert("Signup successful! You can now log in.");
                document.getElementById('signup-username').value = '';
                document.getElementById('signup-password').value = '';
                toggleAuthForms(); // Switch to login form after signup
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
                // Call a function to display the user's zodiac data
                showZodiacData(username); // Implement this function to display the zodiac info
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
        document.getElementById('zodiac-section').classList.add('hidden');
        document.getElementById('signup-username').value = '';
        document.getElementById('signup-password').value = '';
        document.getElementById('login-username').value = '';
        document.getElementById('login-password').value = '';
    }

    function displayUserInterface(username) {
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('zodiac-section').classList.remove('hidden');
    }

    function showZodiacData(username) {
        // Logic to determine and display zodiac data for the user
        // This is where you can populate zodiac sign, lucky number, etc.
        // For now, we'll just simulate with placeholders
        document.getElementById('zodiac-sign').textContent = "Gemini"; // Example data
        document.getElementById('lucky-number').textContent = "7"; // Example data
        document.getElementById('element').textContent = "Air"; // Example data
        document.getElementById('sign-type').textContent = "Mutable"; // Example data
        document.getElementById('modern-planet').textContent = "Mercury"; // Example data
        document.getElementById('traditional-planet').textContent = "Mercury"; // Example data
        document.getElementById('planet-impact').textContent = "Influences communication."; // Example data
        // Add more data as needed
    }

    // Attach functions to the window object so they can be accessed in HTML
    window.handleSignup = handleSignup;
    window.handleLogin = handleLogin;
    window.handleLogout = handleLogout;
    window.toggleAuthForms = toggleAuthForms; // Add toggle to window for access
});
