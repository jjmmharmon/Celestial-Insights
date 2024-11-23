// Handle signup action
export async function handleSignup() {
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();

    if (email && password) {
        try {
            const response = await fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            alert(data.message || 'Signup successful!');

            if (response.ok) {
                // Clear input fields after successful signup
                document.getElementById('signup-email').value = '';
                document.getElementById('signup-password').value = '';
                toggleAuthForms(); // Switch to login form after signup
            }
        } catch (error) {
            console.error('Error during signup:', error);
            alert('An error occurred during signup. Please try again.');
        }
    } else {
        alert('Please enter a valid email and password.');
    }
}

// Handle login action
export async function handleLogin() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    if (email && password) {
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message || 'Login successful!');
                localStorage.setItem('token', data.token); // Store token for session

                displayUserInterface(); // Show zodiac info
            } else {
                alert(data.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred during login. Please try again.');
        }
    } else {
        alert('Please enter both email and password.');
    }
}

// Handle logout action
export function handleLogout() {
    localStorage.removeItem('token'); // Clear session token
    alert('You have been logged out.');

    // Reset to authentication view
    document.getElementById('zodiac-container').classList.add('hidden');
    document.getElementById('auth-container').classList.remove('hidden');
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
}

// Display user interface with zodiac info
export function displayUserInterface() {
    document.getElementById('auth-container').classList.add('hidden');
    document.getElementById('zodiac-container').classList.remove('hidden');
}

// Toggle between login and signup forms
export function toggleAuthForms() {
    const signupForm = document.getElementById('signup');
    const loginForm = document.getElementById('login');
    signupForm.classList.toggle('hidden');
    loginForm.classList.toggle('hidden');
}
