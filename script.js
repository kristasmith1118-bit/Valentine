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

    // 2. Make the "Yes" button bigger (Changed * 1 to * 1.4)
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize * 1.4) + "px";
    yesBtn.style.padding = (currentSize * 0.5) + "px " + (currentSize * 1.4) + "px";
});

yesBtn.addEventListener("click", () => {
    if (typeof confetti === 'function') confetti();
    
    question.innerHTML = "Yay!!! I love you! ❤️";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejNvaWhtOGRkNXJ3OWNmeXdoYjJoejIwZ2tqbWY2YnpwaWpjdjl6ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/TjSPQgowhhJdHgvnwA/giphy.gif"; 
    
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
});

// Cursor Trail Effect
document.addEventListener("mousemove", (e) => {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.fontSize = "20px";
    heart.style.pointerEvents = "none";
    heart.style.opacity = "1";
    heart.style.transition = "all 1s ease";
    heart.style.zIndex = "9999";
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.transform = "translateY(-50px)";
        heart.style.opacity = "0";
    }, 100);

    setTimeout(() => { heart.remove(); }, 1000);
});

// Tab Title Logic (Moved outside mousemove)
window.onblur = () => { document.title = "Come back! 🥺"; };
window.onfocus = () => { document.title = "Will You Be My Valentine?"; };

