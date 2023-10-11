// Your code for handling user authentication should replace the following placeholders.

// Dummy user data for this example.
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

const loginFormContent = document.getElementById('loginFormContent');
const loginSubmit = document.getElementById('loginSubmit');

const signupFormContent = document.getElementById('signupFormContent');
const signupSubmit = document.getElementById('signupSubmit');

// Function to handle login
loginSubmit.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Implement your authentication logic here.
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful!'); // Replace with your desired action (e.g., redirect).
        closeForms();
    } else {
        alert('Invalid username or password.');
    }
});

// Function to handle signup
signupSubmit.addEventListener('click', () => {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Implement your user registration logic here.
    // Typically, you'd send this data to a server to create a new user account.

    alert('Sign up successful!'); // Replace with your desired action (e.g., redirect).
    closeForms();
});

// script.js
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const blurBg = document.getElementById('blurBg');

loginBtn.addEventListener('click', () => {
    showLoginForm();
});

signupBtn.addEventListener('click', () => {
    showSignupForm();
});

blurBg.addEventListener('click', () => {
    closeForms();
});

function showLoginForm() {
    loginForm.style.display = 'block';
    blurBg.style.display = 'block';
}

function showSignupForm() {
    signupForm.style.display = 'block';
    blurBg.style.display = 'block';
}

function closeForms() {
    loginForm.style.display = 'none';
    signupForm.style.display = 'none';
    blurBg.style.display = 'none';
}
