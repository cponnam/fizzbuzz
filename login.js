document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    localStorage.setItem('username', username);  // Save username to local storage
    window.location.href = 'index.html';  // Redirect to the main page
});
