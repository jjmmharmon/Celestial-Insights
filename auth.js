// Function to get the JWT token from localStorage
export function getToken() {
    return localStorage.getItem('token');
}

// Function to store the JWT token in localStorage
export function setToken(token) {
    localStorage.setItem('token', token);
}

// Function to remove the JWT token from localStorage (logout)
export function removeToken() {
    localStorage.removeItem('token');
}

// Function to make authenticated requests
export async function makeAuthenticatedRequest(url, method = 'GET', body = null) {
    const token = getToken(); // Retrieve the token from localStorage

    if (!token) {
        alert('You need to log in first.');
        return;
    }

    try {
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };

        // Include body in the request if it's a POST request
        const options = body ? { method, headers, body: JSON.stringify(body) } : { method, headers };

        const response = await fetch(url, options);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong');
        }

        return data;
    } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong: ' + error.message);
    }
}

// Function to handle login
export async function handleLogin(username, password) {
    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            setToken(data.token);  // Save the JWT token in localStorage
            alert('Login successful');
            return data;
        } else {
            alert(data.message || 'Login failed');
            return null;
        }
    } catch (error) {
        console.error('Login Error:', error);
        alert('Error logging in');
    }
}

// Function to handle signup
export async function handleSignup(username, email, password) {
    try {
        const response = await fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert('Signup successful! You can now log in.');
            return data;
        } else {
            alert(data.message || 'Signup failed');
            return null;
        }
    } catch (error) {
        console.error('Signup Error:', error);
        alert('Error signing up');
    }
}

// Function to handle logout
export function handleLogout() {
    removeToken(); // Remove the token from localStorage
    alert('You have been logged out');
    // Redirect or update UI accordingly
}

// Example of how to use the makeAuthenticatedRequest function:
export async function fetchProtectedData() {
    const data = await makeAuthenticatedRequest('/protected', 'GET');
    console.log(data); // Do something with the data
}
