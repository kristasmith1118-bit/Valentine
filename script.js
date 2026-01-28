const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const gif = document.getElementById("main-gif");

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

// --- 1. THE GROWTH LOGIC ---
noBtn.addEventListener("click", () => {
    // Change No Button Text
    noBtn.innerHTML = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Get current font size or default to 20 if it can't read it
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize) || 20;
    
    // We increase the size by a set amount (pixels) rather than a multiplier 
    // to ensure it grows every single time.
    const newSize = currentSize + 100; 
    
    yesBtn.style.fontSize = newSize + "px";
    
    // Proportional padding to keep the button shape
    yesBtn.style.padding = `${newSize * 0.5}px ${newSize * 1.2}px`;
});

// --- 2. THE YES LOGIC ---
yesBtn.addEventListener("click", () => {
    if (typeof confetti === 'function') {
        confetti();
    }
    question.innerHTML = "Yay!!! I love you! ❤️";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejNvaWhtOGRkNXJ3OWNmeXdoYjJoejIwZ2tqbWY2YnpwaWpjdjl6ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/TjSPQgowhhJdHgvnwA/giphy.gif"; 
    
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
});

// --- 3. THE HEART TRAIL ---
document.addEventListener("mousemove", (e) => {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.fontSize = "20px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "1000";
    heart.style.transition = "transform 1s, opacity 1s";
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.transform = "translateY(-50px)";
        heart.style.opacity = "0";
    }, 50);
    
    setTimeout(() => { heart.remove(); }, 1000);
});

// --- 4. THE TAB TITLE ---
window.onblur = () => { document.title = "Come back! 🥺"; };
window.onfocus = () => { document.title = "Will You Be My Valentine?"; };





