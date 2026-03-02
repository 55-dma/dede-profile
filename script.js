document.documentElement.classList.add('js-enabled');

(function() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        return;
    }
    const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach(link => {
        link.addEventListener('click', function(event) {

const targetId = this.getAttribute('href').substring(1);
const targetElement = document.getElementById(targetId);
            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
                targetId.setAttribute('tabindex', '-1');
targetId.focus();
            }
        });
    });
})();

//Pick a Card Message
const messages = [
    "Freedom is the essence of the soul -- never let it fade.",
    "In every challenge lies the seed of opportunity -- let it grow.",
    "You are a shining star that illuminates the world -- with your brilliance.",
    "Life is a journey -- wander through it with an open heart.",
    "You have the power to achieve anything -- just set your mind to do it.",
];

const pickCardBtn = document.getElementById('pull-card-btn');

pickCardBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    (document.getElementById('message')).textContent = messages[randomIndex];
});

//Contact Form Validation
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const errorMessage = document.getElementById('error-message');

contactForm.addEventListener('submit', function(event) {
    let errors = [];

    if (nameInput.value.trim() === '') {
        errors.push('Name is required.');
    }

    if (emailInput.value.trim() === '') {
        errors.push('Email is required.');
    } else if (!validateEmail(emailInput.value.trim())) {
        errors.push('Please enter a valid email address.');
    }

    if (messageInput.value.trim() === '') {
        errors.push('Message is required.');
    }

    if (errors.length > 0) {
        event.preventDefault();
        errorMessage.textContent = errors.join(' ');
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}




