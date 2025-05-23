// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Initialize VANTA.NET with updated parameters
VANTA.NET({
    el: "#vanta-canvas",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xff3366,
    backgroundColor: 0x0a0a0a,
    points: 15.00,
    maxDistance: 20.00,
    spacing: 16.00,
    showDots: true
});

// Make sure the canvas is visible
document.getElementById('vanta-canvas').style.opacity = '1';
document.getElementById('vanta-canvas').style.zIndex = '0';

// Form toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginToggle = document.getElementById('loginToggle');
    const registerToggle = document.getElementById('registerToggle');
    const title = document.querySelector('h1');
    const subtitle = document.querySelector('p');

    document.querySelectorAll('.toggle-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
            registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
            loginToggle.style.display = loginToggle.style.display === 'none' ? 'block' : 'none';
            registerToggle.style.display = registerToggle.style.display === 'none' ? 'block' : 'none';

            if (loginForm.style.display === 'block') {
                title.textContent = 'Welcome Back';
                subtitle.textContent = 'Login to continue your journey with Amyra';
            } else {
                title.textContent = 'Create Account';
                subtitle.textContent = 'Join Amyra and start your AI journey';
            }
        });
    });

    // Handle form submissions
    // Update the form submission handlers in your script section
    
    // Update the login form handler
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: document.getElementById('email').value,
                    password: document.getElementById('password').value
                })
            });
    
            const data = await response.json();
            if (data.success) {
                localStorage.setItem('token', data.token);
                window.location.href = 'amyra.html';  // Updated from start.html to amyra.html
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during login');
        }
    });
    
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
    
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
    
        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password })
            });
    
            const data = await response.json();
            if (data.success) {
                localStorage.setItem('token', data.token);
                alert('Registration successful! Please login.');
                window.location.reload();
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert('Error connecting to server');
            console.error('Error:', error);
        }
    });
});