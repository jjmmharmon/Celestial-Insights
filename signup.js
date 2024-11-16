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
            }
        } catch (error) {
            console.error('Error:', error);
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
            const data = await response.json();
            alert(data.message);
            if (response.ok) {
                // Store the token in localStorage or sessionStorage
                localStorage.setItem('token', data.token);
                displayUserInterface(username);
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    } else {
        alert("Please enter both username and password.");
    }
}

// Handle logout action
export function handleLogout() {
    alert("You have been logged out.");
    // Remove the token from localStorage
    localStorage.removeItem('token');
    // Hide the user interface and show the login form
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
