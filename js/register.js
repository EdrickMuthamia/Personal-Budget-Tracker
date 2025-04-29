document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('reg-username').value.trim();
    const password = document.getElementById('reg-password').value.trim();
    const confirmPassword = document.getElementById('reg-confirm-password').value.trim();

    if (password !== confirmPassword) {
        document.getElementById('register-error-message').style.display = 'block';
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.username === username)) {
        alert('Username already exists. Please choose a different username.');
        return;
    }

    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful! You can now log in.');
    window.location.href = 'login.html';
});