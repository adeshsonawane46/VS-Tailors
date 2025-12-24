// Select the newsletter form
const newsletterForm = document.querySelector(".newsletter form");
const emailInput = newsletterForm.querySelector("input[type='email']");

// Create a success message div
const successMessage = document.createElement("div");
successMessage.innerText = "✅ Thank you for subscribing! You'll receive the latest updates soon.";
successMessage.style.color = "green";
successMessage.style.fontSize = "1.2rem";
successMessage.style.marginTop = "10px";
successMessage.style.display = "none"; // hide initially
newsletterForm.parentNode.insertBefore(successMessage, newsletterForm.nextSibling);

// Handle form submission
newsletterForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Optionally: send email to backend here using fetch()

    // Show success message
    successMessage.style.display = "block";

    // Clear the input
    emailInput.value = "";

    // Hide message after 3 seconds
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000);
});
