const contactForm = document.querySelector("form");
const contactName = document.querySelector("#contact-name");
const contactResponse = document.querySelector("#contact-response");

contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const name = contactName.value.trim();

    if (name === "") {
        contactResponse.textContent = "Please enter your name.";
        return;
    }

    try {
        const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name }),
        });

        const result = await response.json();

        if (!response.ok) {
            contactResponse.textContent = result.error;
            return;
        }

        contactResponse.textContent = result.message;
        contactForm.reset();
    } catch (error) {
        contactResponse.textContent = "Something went wrong. Please try again.";
    }
});