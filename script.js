document.addEventListener('DOMContentLoaded', () => {
    const learnMore = document.getElementById('learn');
    const contactForm = document.getElementById('contact-form');

    learnMore.addEventListener('click', () => {
        alert('Explore the Website!');
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("Submitted Successfully")
        alert('Thank you for contacting us!');
    });
});
