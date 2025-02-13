const fallingItems = {
    'rose-day': ['🌹', '🌸', '💮'],
    'propose-day': ['💍', '💎', '✨'],
    'chocolate-day': ['🍫', '🍬', '🍩'],
    'teddy-day': ['🧸', '🐻', '🎀'],
    'promise-day': ['📜', '✉️', '🤞'],
    'kiss-day': ['💋', '👄', '💌'],
    'hug-day': ['🤗', '🫂', '💞'],
    'valentine-question': ['❤️', '💖', '💘']
};

let currentSection = 'rose-day';
let intervalId;

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

function createFallingItems() {
    const container = document.querySelector('.falling-items');
    container.innerHTML = '';
    
    const items = fallingItems[currentSection];
    if (!items) return;

    intervalId = setInterval(() => {
        const item = document.createElement('div');
        item.className = 'falling-item';
        item.textContent = items[Math.floor(Math.random() * items.length)];
        item.style.left = Math.random() * 100 + '%';
        item.style.animationDuration = Math.random() * 3 + 2 + 's';
        item.style.fontSize = Math.random() * 20 + 20 + 'px';
        container.appendChild(item);

        // Remove elements after animation
        setTimeout(() => item.remove(), 5000);
    }, 300);
}

function handleScroll() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight/2 && rect.bottom >= window.innerHeight/2) {
            currentSection = section.classList[1];
            clearInterval(intervalId);
            createFallingItems();
        }
    });
}

// Initialize
window.addEventListener('load', () => {
    createFallingItems();
    window.addEventListener('scroll', handleScroll);
});

// Previous button functionality
const noButtonTexts = [
    "Oops, you clicked the wrong button",
    "Are you sure?",
    "Please think again!",
    "I will love you so much 😘",
    "I will give you Chocolates everyday 😋",
    "Don't break my heart 💔",
    "I'll start crying 😢",
    "Pretty please? 🥺",
    "You're killing me!",
    "I'll never recover...",
    "I'm begging you! 😭",
    "Baar Baar touch na karo mujhe gudgudi hoti hai 😆",
    "Are you colour blind? Can't you see that big Green Button?",
    "Now, It's too much, Please just say 'Yes'"
];
let currentScale = 1;
let currentTextIndex = 0;

document.getElementById('yesBtn').addEventListener('click', showSuccess);
document.getElementById('noBtn').addEventListener('click', handleNo);

function showSuccess() {
    window.location.href = 'yes.html';
}

function handleNo() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    
    currentScale += 0.2;
    yesBtn.style.transform = `scale(${currentScale})`;
    noBtn.style.transform = `scale(${Math.max(0.5, 1 - (currentScale * 0.1))})`;
    noBtn.textContent = noButtonTexts[currentTextIndex % noButtonTexts.length];
    currentTextIndex = (currentTextIndex + 1) % noButtonTexts.length;
}

// Random pattern generation
function createPattern(className) {
    const section = document.querySelector(`.${className}`);
    const patternCount = Math.floor(Math.random() * 10) + 5;
    for(let i = 0; i < patternCount; i++) {
        const pattern = document.createElement('img');
        pattern.src = `assets/${section.classList[1].substring(0, section.classList[1].length-3)}pattern-${Math.floor(Math.random()*5)+1}.svg`;
        pattern.className = 'svg-pattern';
        pattern.style.width = `${Math.random() * 100 + 50}px`;
        pattern.style.top = `${Math.random() * 100}%`;
        pattern.style.left = `${Math.random() * 100}%`;
        section.appendChild(pattern);
    }
}

// Initialize all sections
document.querySelectorAll('.theme-day').forEach(section => {
    createPattern(section.classList[1]);
    console.log(section.classList);
});

function positionMediaElements(section) {
    const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
    
    // Position YouTube short
    const youtube = section.querySelector('.youtube-short');
    youtube.style.position = 'absolute';
    youtube.style[positions[Math.floor(Math.random()*4)]] = '50px';
    
    // Position image
    const image = section.querySelector('.transparent-image');
    image.style[positions[Math.floor(Math.random()*4)]] = '100px';
    
    // Position text
    const text = section.querySelector('.cute-message');
    text.style[positions[Math.floor(Math.random()*4)]] = '80px';
}
