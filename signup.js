// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    console.log("Signup.js loaded");

    function toggleAuthForms() {
        const signupForm = document.getElementById('signup');
        const loginForm = document.getElementById('login');

        signupForm.classList.toggle('hidden');
        loginForm.classList.toggle('hidden');
    }

    async function handleSignup() {
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        if (username && email && password) {
            try {
                const response = await fetch('http://localhost:5000/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, email, password }),
                });
                const message = await response.text();
                alert(message);
                if (response.ok) {
                    // Clear input fields
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

    async function handleLogin() {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (username && password) {
            try {
                const response = await fetch('http://localhost:5000/login', {
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

    function handleLogout() {
        alert("You have been logged out.");
        document.getElementById('zodiac-container').classList.add('hidden');
        document.getElementById('auth-container').classList.remove('hidden');
        // Clear the input fields
        document.getElementById('login-username').value = '';
        document.getElementById('login-password').value = '';
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
