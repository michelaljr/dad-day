document.addEventListener('DOMContentLoaded', () => {
    const imageCards = document.querySelectorAll('.image-card');

    imageCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('revealed'); // Toggle 'revealed' class on click
        });
    });
});
