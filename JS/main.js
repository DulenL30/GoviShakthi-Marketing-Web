//mobile navigation
function initMobileNav(){
    const hamburger =document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links'); // Corrected 'humberger' to 'hamburger' and 'nav' to 'navLinks'

    if(hamburger){
        hamburger.addEventListener('click',()=>{
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
}

//caraousel initialization
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const cards = Array.from(track.children);
    const cardWidth = cards[0].getBoundingClientRect().width;

    // Clone the cards to create an infinite loop effect
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });

    // Adjust the animation duration based on the number of cards
    const totalWidth = cardWidth * cards.length*2;
    const animationDuration = totalWidth / 50; // Adjust the speed as needed
    track.style.animationDuration = `${animationDuration}s`; // Changed from ${animationDuration}s to '${animationDuration}s'
});

//FAQ data
const faqData=[
    {
        question: "What Is GoviShakthi?",
        answer: "GoviShakthi is an AI powered platform that helps farmers to get the right information at the right time to make informed decisions. It provides information on weather, crop management, pest management, market prices, and government schemes."
    },

    {
        question: "What Is GoviShakthi?",
        answer: "GoviShakthi is an AI powered platform that helps farmers to get the right information at the right time to make informed decisions. It provides information on weather, crop management, pest management, market prices, and government schemes."
    },

    {
        question: "What Is GoviShakthi?",
        answer: "GoviShakthi is an AI powered platform that helps farmers to get the right information at the right time to make informed decisions. It provides information on weather, crop management, pest management, market prices, and government schemes."
    },
];

//Initialize FAQ Section
function initFAQ() {
    const faqContainer = document.querySelector('.faq-container');

    if (faqContainer) {
        faqData.forEach((item, index) => {
            const faqItem = document.createElement('div');
            faqItem.classList.add('faq-item');


            // Corrected the innerHTML assignment to use template literals and proper HTML structure
            faqItem.innerHTML = `
          <div class="faq-question">
            ${item.question}
            <span class="faq-toggle">+</span>
          </div>
          <div class="faq-answer">
            ${item.answer}
          </div>
        `;

            const question = faqItem.querySelector('.faq-question');
            const answer = faqItem.querySelector('.faq-answer');
            const toggle = faqItem.querySelector('.faq-toggle');

            question.addEventListener('click', () => {
                answer.classList.toggle('active');
                toggle.textContent = answer.classList.contains('active') ? '-' : '+';
            });

            faqContainer.appendChild(faqItem);
        });
    }
}

//Subscription form Handler
function initSubscriptionForm(){
    const form = document.querySelector('.subscription-form');
    if(form){
        form.addEventListener('submit', (e)=>{
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            //Backend implimentation
            alert('Thanks for joining our waitlist! We will notify you once we are ready to launch.');
            form.reset();
        });
    }
}

//smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({
                behavior: 'smooth',
            });
        }
    });
});

//initialize all functions
document.addEventListener('DOMContentLoaded', function(){
    initMobileNav();
    initFAQ();
    initSubscriptionForm();
});

