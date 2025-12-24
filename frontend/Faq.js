// Frequently Asked Questions (FAQ) functionality

document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".question");

        question.addEventListener("click", function () {
            // Close other open FAQs
            faqItems.forEach((faq) => {
                if (faq !== item) {
                    faq.classList.remove("active");
                    faq.querySelector(".answer").style.display = "none";
                }
            });

            // Toggle the clicked FAQ
            const answer = item.querySelector(".answer");
            if (item.classList.contains("active")) {
                item.classList.remove("active");
                answer.style.display = "none";
            } else {
                item.classList.add("active");
                answer.style.display = "block";
            }
        });
    });
});