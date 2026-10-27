
// ------------------------------
// 1. Show the Current Year
// ------------------------------

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ------------------------------
// 2. Typing Animation
// ------------------------------

// The words that will appear on the screen
const words = [
    "Beginner Web Developer",
    "HTML Learner",
    "CSS Learner",
    "JavaScript Learner"
];

// Find the typing text element in HTML
const typingText = document.getElementById("typing-text");

// Keep track of the current word
let wordIndex = 0;

// Keep track of the current letter
let letterIndex = 0;

// Check whether letters are being deleted
let deleting = false;


// Type or delete one letter at a time
function typeEffect() {

    // Stop if the typing element does not exist
    if (!typingText) {
        return;
    }

    // Get the current word
    const currentWord = words[wordIndex];

    // Add or remove one letter
    if (deleting) {
        letterIndex--;
    } else {
        letterIndex++;
    }

    // Display the letters on the website
    typingText.textContent = currentWord.substring(0, letterIndex);

    // When the word is complete, start deleting
    if (!deleting && letterIndex === currentWord.length) {

        deleting = true;

        // Wait before deleting the word
        setTimeout(typeEffect, 1200);

    } else if (deleting && letterIndex === 0) {

        // Stop deleting and move to the next word
        deleting = false;

        wordIndex++;

        // Start again after the last word
        if (wordIndex === words.length) {
            wordIndex = 0;
        }

        setTimeout(typeEffect, 400);

    } else {

        // Control the typing and deleting speed
        let speed = deleting ? 50 : 100;

        setTimeout(typeEffect, speed);
    }
}


// Start the typing animation
if (typingText) {
    typeEffect();
}
