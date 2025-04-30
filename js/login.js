// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('loggedInUser', username);
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});

// Toggle password visibility
document.getElementById('toggle-password').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    if (this.checked) {
        passwordField.type = 'text'; // Show password
    } else {
        passwordField.type = 'password'; // Hide password
    }
});