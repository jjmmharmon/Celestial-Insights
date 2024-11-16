// Handle signup action
export async function handleSignup() {
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (username && email && password) {
        try {
            const response = await fetch('/signup', {
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
                toggleAuthForms(); // Switch to login after successful signup
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error during signup.');
        }
    } else {
        alert("Please enter valid username, email, and password.");
    }
}

// Handle login action
export async function handleLogin() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username && password) {
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const message = await response.text();
            alert(message);

            if (response.ok) {
                // Store username or JWT token in localStorage (for persistence)
                localStorage.setItem('user', username);
                displayUserInterface(username);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error during login.');
        }
    } else {
        alert("Please enter both username and password.");
    }
}

// Handle logout action
export function handleLogout() {
    alert("You have been logged out.");
    localStorage.removeItem('user'); // Clear user from localStorage
    document.getElementById('zodiac-container').classList.add('hidden');
    document.getElementById('auth-container').classList.remove('hidden');
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
}

// Display user interface upon successful login
export function displayUserInterface(username) {
    document.getElementById('auth-container').classList.add('hidden');
    document.getElementById('zodiac-container').classList.remove('hidden');
    document.getElementById('user-name').textContent = username;
}

// Toggle between login and signup forms
export function toggleAuthForms() {
    const signupForm = document.getElementById('signup');
    const loginForm = document.getElementById('login');
    signupForm.classList.toggle('hidden');
    loginForm.classList.toggle('hidden');
}

// Check if user is already logged in (from localStorage)
export function checkUserLoggedIn() {
    const user = localStorage.getItem('user');
    if (user) {
        displayUserInterface(user); // If user is logged in, show user interface
    }
}

// Initialize the page state
document.addEventListener('DOMContentLoaded', checkUserLoggedIn);
