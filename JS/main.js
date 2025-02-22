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
    track.style.animationDuration = `${animationDuration}s`;
});