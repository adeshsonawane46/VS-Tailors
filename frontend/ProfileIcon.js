document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("login-btn");
    const profileBtn = document.getElementById("profile-btn");
    const profileDropdown = document.getElementById("profile-dropdown");

    const isLoggedIn = localStorage.getItem("loggedIn") === "true";

    if (isLoggedIn) {
        loginBtn.style.display = "none";
        profileBtn.style.display = "inline-block";

        // Toggle dropdown on profile click
        profileBtn.addEventListener("click", function(e) {
            e.stopPropagation(); // prevent immediate close
            profileDropdown.style.display = profileDropdown.style.display === "none" ? "block" : "none";
        });

        // Close dropdown if user clicks outside
        document.addEventListener("click", function() {
            profileDropdown.style.display = "none";
        });
    } else {
        loginBtn.style.display = "inline-block";
        profileBtn.style.display = "none";
    }
});

// Logout function
function logoutUser() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("token");
    window.location.href = "index.html";
}
