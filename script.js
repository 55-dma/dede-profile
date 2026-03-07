document.documentElement.classList.add('js-enabled');

//Reduced motion
(function() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        return;
    }

    const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach(link => {
        link.addEventListener('click', function(event) {

const targetId = this.getAttribute('href').substring(1);
        if (!targetId) return;

        const targetElement =
        document.getElementById(targetId);
        if (targetElement) {
            event.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
            targetElement.setAttribute('tabindex', '-1');
            targetElement.focus({ preventScroll: true });
            targetElement.addEventListener('blur', () => {
                targetElement.removeAttribute('tabindex');
            }, { once: true });
        }
            });
         });
})();

//Audio & Button
const audio = document.getElementById("welcomeAudio");
const button = document.getElementById("audioToggle");

button.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        button.textContent = "⏸ Pause Audio";
        button.setAttribute("aria-label", "Pause welcome audio");
    } else {
        audio.pause();
        button.textContent = "▶ Play Audio";
        button.setAttribute("aria-label", "Play welcome audio");
    };


//Pick a Card Message
const messages = [
    "📝 Freedom is the essence of the soul ~ never let it Fade.",
    "📝 In every challenge lies the seed of opportunity ~ let it Grow.",
    "📝 You are a shining star that brights the world ~ just being in It.",
    "📝 Life is a journey ~ wander through it with an open Heart.",
    "📝 You have the power to achieve anything ~ just set your mind to Do It.",
    "📝 Life at times is a struggle...always remember ~ This too shall Pass.",
    "📝 Celebrate the beauty of your life ~ in every Moment.",
    "📝 Dance to the rhythm ~ of your own beating Heart.",
    "📝 The stars are your guide ~ follow their Light.",
    "📝 My FAVORITE ~ Bloom...Wherever You Are Planted!",
];

const pullCardBtn = document.getElementById('pull-card-btn');

const cardMessage = document.getElementById('card-message');

if (pullCardBtn && cardMessage) {
    pullCardBtn.addEventListener('click', () => {
        const index = Math.floor(Math.random() * messages.length);
        cardMessage.textContent = messages[index];
    });
}

//Contact Form Validation

const contactForm = document.getElementById('contact-form');
if (contactForm) {

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');

const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const successMessage = document.getElementById('form-success');

contactForm.addEventListener('submit', (event) => {
    let valid = true;
    successMessage.textContent = "";

    if (!nameInput.value.trim()) {
        nameError.textContent = "Please enter your name."; valid = false;
        } else {
            nameError.textContent = "";
        }

  if (!emailInput.value.trim()) {
        emailError.textContent = "Please enter a valid email address."; valid = false;
        } else {
            emailError.textContent = "";
        }

  if (!messageInput.value.trim()) {
        messageError.textContent = "Please share your ideas you have on your project."; valid = false;
        } else {
            messageError.textContent = "";
        }

  if (!valid) {
    event.preventDefault();
    return;
  }

event.preventDefault();
successMessage.textContent = "Thank you!  Your message has been sent -- I look forward to talking with you!";
contactForm.reset();

});

}


