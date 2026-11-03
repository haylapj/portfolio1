


const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


const words = [
    "Beginner Web Developer",
    "HTML Learner",
    "CSS Learner",
    "JavaScript Learner"
];


const typingText = document.getElementById("typing-text");


let wordIndex = 0;


let letterIndex = 0;

let deleting = false;


function typeEffect() {

    
    if (!typingText) {
        return;
    }

  
    const currentWord = words[wordIndex];

    
    if (deleting) {
        letterIndex--;
    } else {
        letterIndex++;
    }

    
    typingText.textContent = currentWord.substring(0, letterIndex);

    
    if (!deleting && letterIndex === currentWord.length) {

        deleting = true;

        
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


if (typingText) {
    typeEffect();
}
const backToTop = document.getElementById("backToTop")
window.addEventListener("scroll",function (){
    if (window.scrollY > 300){
        backToTop.style.display = "block"
    } else {
        backToTop.style.display = "none"
    }
});



    backToTop.addEventListener("click",function () {
        window.scrollTo(0, 0);
           
        });
    

const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
    themeToggle.addEventListener("click",function() {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeToggle.textContent = "🌙 Night Mode";
        } else {
            themeToggle.textContent = "☀️ Day Mode";
        }

    });
} 
    
