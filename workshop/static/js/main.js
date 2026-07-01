// control video opactiy with scroll
const videoBackground = document.querySelector(".video-background");

function updateVideoOpacity() {
    const fadeDistance = window.innerHeight*2;
    const scrollProgress = window.scrollY / fadeDistance;
    const limitedProgress = Math.min(Math.max(scrollProgress, 0.4), 1);

    videoBackground.style.opacity = 1 - limitedProgress;
}

window.addEventListener("scroll", updateVideoOpacity, {
    passive: true,
});

window.addEventListener("resize", updateVideoOpacity);

updateVideoOpacity();

// select form components
const contactForm = document.querySelector("form");
const contactName = document.querySelector("#contact-name");
const contactEmail = document.querySelector("#contact-email");
const contactMessage = document.querySelector("#contact-message");
const contactResponse = document.querySelector("#contact-response");

// listen to submission event
contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const name = contactName.value.trim();
    const email = contactEmail.value.trim();
    const message = contactMessage.value.trim();

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
        body: JSON.stringify({
            name: name,
            email: email,
            message: message,
        }),
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