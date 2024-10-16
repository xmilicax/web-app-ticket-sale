$(function() {
    // Logout function
    $('#logout').on('click', function(e) {
        e.preventDefault();  // Prevent default behavior of the anchor tag

        // Clear stored tokens
        localStorage.removeItem('token');
        localStorage.removeItem('type');

        // Optionally, clear other session-related data
        // localStorage.removeItem('userid'); // if you have it
        // localStorage.removeItem('username'); // if you have it

        // Redirect to the login page or home page
        window.location.href = '../pocetna.html';  // Adjust the path as necessary
    });
});
