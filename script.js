// Function to handle the transition from the big banner to the main content
function handleBannerTransition() {
    setTimeout(() => {
        document.getElementById('big-banner').classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');
    }, 2000); // Big banner will be displayed for 5 seconds
}

// Initialize the banner transition on page load
window.onload = handleBannerTransition;

// Function to handle user's answer
function handleAnswer(isYes) {
    const responseDiv = document.getElementById('response');
    responseDiv.classList.remove('hidden');
    if (isYes) {
        responseDiv.innerHTML = '<div id="yes-response"><h2>Saadullah also loves you!</h2></div>';
    } else {
        responseDiv.innerHTML = '<div id="no-response"><h2>Oh, that\'s too bad!</h2></div>';
        // Animate the button
        animateNoButton();
    }
}

// Function to animate the "No" button
function animateNoButton() {
    const noButton = document.querySelector('.no');
    noButton.style.transition = 'transform 1s ease-out';
    noButton.style.transform = 'translateY(-50px) translateX(50px)';
}
