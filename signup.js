// signup.js
document.addEventListener("DOMContentLoaded", function () {
    console.log("Signup.js loaded");

    // Toggle between login and signup forms
    function toggleAuthForms() {
        const signupForm = document.getElementById('signup');
        const loginForm = document.getElementById('login');
        signupForm.classList.toggle('hidden');
        loginForm.classList.toggle('hidden');
    }

    // Handle signup action
    async function handleSignup() {
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        if (username && email && password) {
            try {
                const response = await fetch(`${BASE_URL}/signup`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, email, password }),
                });
                const message = await response.text();
                alert(message);
                if (response.ok) {
                    document.getElementById('signup-username').value = '';
                    document.getElementById('signup-email').value = '';
                    document.getElementById('signup-password').value = '';
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            alert("Please enter valid username, email, and password.");
        }
    }

    // Handle login action
    async function handleLogin() {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (username && password) {
            try {
                const response = await fetch(`${BASE_URL}/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password }),
                });
                const message = await response.text();
                alert(message);
                if (response.ok) {
                    displayUserInterface(username);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            alert("Please enter both username and password.");
        }
    }

    // Handle logout action
    function handleLogout() {
        alert("You have been logged out.");
        document.getElementById('zodiac-container').classList.add('hidden');
        document.getElementById('auth-container').classList.remove('hidden');
        document.getElementById('login-username').value = '';
        document.getElementById('login-password').value = '';
    }

    // Display user interface upon successful login
    function displayUserInterface(username) {
        document.getElementById('auth-container').classList.add('hidden');
        document.getElementById('zodiac-container').classList.remove('hidden');
        document.getElementById('user-name').textContent = username;
    }

    window.handleSignup = handleSignup;
    window.handleLogin = handleLogin;
    window.handleLogout = handleLogout;
    window.toggleAuthForms = toggleAuthForms;
});
