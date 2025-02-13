// Add YouTube video embeds dynamically
const videoIds = ['leT7O4mMtsc', 'ht3bBTHBHkc', 'VIDEO_ID_3'];
const container = document.querySelector('.videos-container');

videoIds.forEach((id, index) => {
    const iframe = document.createElement('iframe');
    iframe.className = 'youtube-short';
    iframe.src = `http://www.youtube.com/embed/${id}`;
    iframe.loading = 'lazy';
    container.children[index].appendChild(iframe);
});

function sendMessage() {
    const message = document.querySelector('textarea').value;
    // Add your message handling logic here
    alert('Message sent to my heart! 💖');
}

// Add floating hearts animation
function createHearts() {
    const heartsContainer = document.querySelector('.hearts');
    const heartCount = 20;
    
    for(let i = 0; i < heartCount; i++) {
        const heart = document.createElement('span');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heartsContainer.appendChild(heart);
    }
}

window.addEventListener('load', createHearts);
