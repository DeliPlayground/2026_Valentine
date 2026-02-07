// Get buttons
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// Make the "No" button escape when hovered
noBtn.addEventListener('mouseover', function() {
    // Generate random position
    const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    // Move the button to the random position
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});

// Confetti animation
function createConfetti() {
    const container = document.getElementById('confetti-container');
    const confettiEmojis = ['❤️', '💕', '💖', '💗', '💝', '🎉', '✨', '💫'];
    
    // Create 50 confetti pieces
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
        
        // Random horizontal position
        const xPos = Math.random() * window.innerWidth;
        confetti.style.left = xPos + 'px';
        confetti.style.top = '0px';
        
        // Random animation duration (4-7 seconds) — longer fall
        const duration = 4 + Math.random() * 3;
        confetti.style.animation = `fall ${duration}s linear forwards`;
        
        // Random delay (stagger start)
        confetti.style.animationDelay = Math.random() * 1.0 + 's';
        
        container.appendChild(confetti);
        
        // Remove confetti element after animation completes
        setTimeout(() => {
            confetti.remove();
        }, (duration + 0.6) * 1000);
    }
}

// Trigger confetti when Yes button is clicked
yesBtn.addEventListener('click', function() {
    createConfetti();
    // Navigate after a short delay
    setTimeout(() => {
        window.location.href = 'surprise.html';
    }, 500);
});
