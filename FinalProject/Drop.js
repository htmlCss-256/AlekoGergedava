const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

menuBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});


const loginButton = document.querySelector('.dropdown button:first-child');
const registerButton = document.querySelector('.dropdown .btn-auth');

const authModal = document.getElementById('authModal');
const closeAuth = document.getElementById('closeAuth');

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');

loginButton.addEventListener('click', () => {
    authModal.style.display = 'flex';
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
});

registerButton.addEventListener('click', () => {
    authModal.style.display = 'flex';
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

closeAuth.addEventListener('click', () => {
    authModal.style.display = 'none';
});

showRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
});

window.addEventListener('click', (e) => {
    if (e.target === authModal) {
        authModal.style.display = 'none';
    }
});
