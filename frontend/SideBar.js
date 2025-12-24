document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const hamburger = document.getElementById("hamburger");
    const closeBtn = document.querySelector("#sidebar .closebtn");

    // Open sidebar
    hamburger.addEventListener("click", function () {
        sidebar.style.left = "0px";
    });

    // Close sidebar
    closeBtn.addEventListener("click", function () {
        sidebar.style.left = "-250px";
    });
});
