const contactForm = document.querySelector("form");
const contactName = document.querySelector("#contact-name");
const contactResponse = document.querySelector("#contact-response");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = contactName.value.trim();

    if (name === "") {
        contactResponse.textContent = "Please enter your name.";
        return;
    }

    contactResponse.textContent = "Thanks, " + name + ". Your message was received in the browser.";
    contactForm.reset();
});