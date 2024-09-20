// Get form elements
const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');
const toggleFormButton = document.getElementById('toggleForm');
const formTitle = document.getElementById('formTitle');

const signUpError = document.getElementById('signUpError');
const signInError = document.getElementById('signInError');

// Get modal elements
const congratsModal = document.getElementById('congratsModal');
const closeModal = document.getElementById('closeModal');

// Form toggle logic between Sign Up and Sign In
toggleFormButton.addEventListener('click', () => {
    if (signUpForm.classList.contains('hidden')) {
        signUpForm.classList.remove('hidden');
        signInForm.classList.add('hidden');
        formTitle.textContent = 'Sign Up';
        toggleFormButton.textContent = 'Already have an account? Sign In';
    } else {
        signInForm.classList.remove('hidden');
        signUpForm.classList.add('hidden');
        formTitle.textContent = 'Sign In';
        toggleFormButton.textContent = 'Don’t have an account? Sign Up';
    }
});

// Show the modal
function showCongratsModal() {
    congratsModal.style.display = 'flex';
}

// Close the modal
closeModal.addEventListener('click', () => {
    congratsModal.style.display = 'none';
});

// Sign Up form validation and submission
signUpForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('signUpUsername').value.trim();
    const email = document.getElementById('signUpEmail').value.trim();
    const password = document.getElementById('signUpPassword').value;
    const confirmPassword = document.getElementById('signUpConfirmPassword').value;

    if (!username || !email || !password || !confirmPassword) {
        signUpError.textContent = 'All fields are required.';
        return;
    }

    if (password.length < 6) {
        signUpError.textContent = 'Password must be at least 6 characters long.';
        return;
    }

    if (password !== confirmPassword) {
        signUpError.textContent = 'Passwords do not match.';
        return;
    }

    signUpError.textContent = ''; // Clear any error messages
    showCongratsModal(); // Show congratulatory modal
});

// Sign In form validation and submission
signInForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('signInUsername').value.trim();
    const password = document.getElementById('signInPassword').value;

    if (!username || !password) {
        signInError.textContent = 'Both fields are required.';
        return;
    }

    if (password.length < 6) {
        signInError.textContent = 'Password must be at least 6 characters long.';
        return;
    }

    signInError.textContent = ''; // Clear any error messages
    showCongratsModal(); // Show congratulatory modal
});
