document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberMe = document.getElementById("checkbox");
	const existingUserBtn = document.getElementById("existing");
	const loginForm = document.getElementById("loginForm");

            // Check if credentials exist in localStorage
	const savedUsername = localStorage.getItem("username");
	const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
	    existingUserBtn.style.display = "block";
    }

            // Handle form submission
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh

        const username = usernameInput.value;
        const password = passwordInput.value;

        alert(`Logged in as ${username}`);

        if (rememberMe.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

                // Show existing user button if credentials are stored
        if (localStorage.getItem("username")) {
            existingUserBtn.style.display = "block";
        } else {
            existingUserBtn.style.display = "none";
        }
    });

            // Handle "Login as existing user" button
    existingUserBtn.addEventListener("click", function () {
        alert(`Logged in as ${savedUsername}`);
    });
});