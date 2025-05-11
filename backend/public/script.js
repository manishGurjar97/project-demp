const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginBtn = document.getElementById('show-login');

loginBtn.addEventListener('click', () => {
    loginForm.classList.add('show');
    signupForm.classList.remove('show');
});

document.querySelector('#login-form .register a').addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.remove('show');
    signupForm.classList.add('show');
});

document.querySelector('#signup-form .register a').addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.classList.remove('show');
    loginForm.classList.add('show');
});

document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        loginForm.classList.remove('show');
        signupForm.classList.remove('show');
    });
});
