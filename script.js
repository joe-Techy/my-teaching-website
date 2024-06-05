// Highlight the current section in the navigation bar
document.addEventListener('DOMContentLoaded', function() {
    const CurrentLocation = location.href;
    const menuItem = document.querySelectorAll('nav ul li a');
    const menuLength = menuItem.length;
    for (let i = 0; i <menuLength; i++) {
        if (menuItem[i].href === CurrentLocation) {
            menuItem[i].className = 'active';
        }
    }
});
// Validate form inputs
function ValidateForm(event) {
    const email = document.getElementById('email').Value;
    const password = document.getElementById('password').Value;
    if (email === '' || password === '') {
        alert('All fields are required.');
        event.preventDefault();
        return false;
    }
    if (!validateEmail(email)) {
        alert('please enter a valid email address.');
        event.preventDefault();
        return false;
    }
    return true;
}
// Validate email format
function validateEmail(email) {
    const re = /^[^\s@]+[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
// Open and close modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
// Event listeners for modal buttons
document.addEventListener('DOMContentLoaded', function() {
    const openModalButton = document.getElementById('openModalButton');
    const closeModalButton = document.getElementById('closeModalButton');
    const Modal = document.getElementById('myModal');
    if (openModalButton) {
        openModalButton.addEventListener('click', function() {
            openModal('myModal');
        });
    }
    if (closeModalButton) {
        closeModalButton.addEventListener('click', function() {
            closeModal('myModal');
        });
    }
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal('myModal');
        }
    };
});
// Add event listener for form validation
document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.getElementById('signUpForm');
    if (signUpForm) {
        signUpForm.addEventListener('submit', function(event) {
            ValidateForm(event);
        });
    }
});