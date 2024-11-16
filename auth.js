const token = localStorage.getItem('token'); // Get the token from storage

if (token) {
    const response = await fetch('/protected', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    const data = await response.json();
    console.log(data);
} else {
    alert('You need to log in first.');
}
