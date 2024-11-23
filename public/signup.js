// Handle signup action
export async function handleSignup() {
    const username = document.getElementById('signup-username').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();

    if (username && email && password) {
        try {
            const response = await fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();
            alert(data.message || 'Signup successful!');

            if (response.ok) {
                // Clear input fields after successful signup
                document.getElementById('signup-username').value = '';
                document.getElementById('signup-email').value = '';
                document.getElementById('signup-password').value = '';
                toggleAuthForms(); // Switch to login form after signup
            }
        } catch (error) {
            console.error('Error during signup:', error);
            alert('An error occurred during signup. Please try again.');
        }
    } else {
        alert('Please enter a valid username, email, and password.');
    }
}

// Handle login action
export async function handleLogin() {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();

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

            if (response.ok) {
                alert(data.message || 'Login successful!');

                // Store the token in localStorage
                localStorage.setItem('token', data.token);

                // Display the user interface for authenticated users
                displayUserInterface(username);
            } else {
                alert(data.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred during login. Please try again.');
        }
    } else {
        alert('Please enter both username and password.');
    }
}

// Handle logout action
export function handleLogout() {
    // Remove the token from localStorage
    localStorage.removeItem('token');

    alert('You have been logged out.');

    // Reset the UI to show the login form
    document.getElementById('zodiac-container').classList.add('hidden');
    document.getElementById('auth-container').classList.remove('hidden');
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
}

// Display user interface upon successful login
export function displayUserInterface(username) {
    // Hide authentication forms
    document.getElementById('auth-container').classList.add('hidden');

    // Show zodiac information container
    document.getElementById('zodiac-container').classList.remove('hidden');

    // Update UI with logged-in username
    document.getElementById('user-name').textContent = username;
}

// Toggle between login and signup forms
export function toggleAuthForms() {
    const signupForm = document.getElementById('signup');
    const loginForm = document.getElementById('login');

    signupForm.classList.toggle('hidden');
    loginForm.classList.toggle('hidden');
}
