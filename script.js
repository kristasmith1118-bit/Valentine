const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const gif = document.getElementById("main-gif");

// List of messages for the "No" button
const messages = [
    "Are you sure?",
    "Really sure??",
    "Ur a HOE!!!",
    "You will regret thisssss",
    "You are mean :(",
    "I won't buy you a cat",
    "PLEASEEEE"
];

let messageIndex = 0;

noBtn.addEventListener("click", () => {
    // 1. Change the text on the "No" button
    noBtn.innerHTML = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // 2. Make the "Yes" button bigger
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize * 1) + "px";
    yesBtn.style.padding = (currentSize * 0.8) + "px " + (currentSize * 1) + "px";
});

yesBtn.addEventListener("click", () => {
    confetti();
    // Final screen content
    question.innerHTML = "Yay!!! I love you! ❤️";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejNvaWhtOGRkNXJ3OWNmeXdoYjJoejIwZ2tqbWY2YnpwaWpjdjl6ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/TjSPQgowhhJdHgvnwA/giphy.gif"; // Success GIF
    
    // Hide the buttons
    noBtn.style.display = "none";
    yesBtn.style.display = "none";

});

