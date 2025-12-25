function updateSidebarAuth() {
    const loginBtn = document.getElementById("sidebar-login-btn");
    const profileBtn = document.getElementById("sidebar-profile-btn");

    if (!loginBtn || !profileBtn) return;

    const isLoggedIn = localStorage.getItem("loggedIn") === "true";

    if (isLoggedIn) {
        loginBtn.style.display = "none";
        profileBtn.style.display = "flex";   // show profile + logout
        profileBtn.onclick = logoutUser;
    } else {
        loginBtn.style.display = "block";    // show login
        profileBtn.style.display = "none";   // hide logout
    }
}

// Page load
document.addEventListener("DOMContentLoaded", updateSidebarAuth);
