// script.js
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email && password) {
        // Simulate login process
        console.log('Login attempt with:', {
            email: email,
            password: password,
            rememberMe: document.getElementById('remember').checked
        });
        alert('Login successful! (This is a demo)');
    } else {
        alert('Please fill in all fields');
    }
});

// Add placeholder attribute for better label functionality
document.querySelectorAll('input').forEach(input => {
    input.setAttribute('placeholder', ' ');
});