// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Assuming we have a function to clear session or token
    logoutUser();
});

function logoutUser() {
    // Clear user session or token
    // This might involve removing a token from localStorage or making an API call to invalidate a session
    localStorage.removeItem('userToken'); // Example for localStorage
    // Redirect to login page after logout
    setTimeout(function() {
        window.location.href = 'login.html';
    }, 2000); // Redirect after 2 seconds
}
