
        const heartsContainer = document.querySelector('.hearts');

        function createHeart() {
            const heart = document.createElement('span');
            heart.innerHTML = '💗';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
            heart.style.fontSize = (Math.random() * 30 + 30) + 'px';
            heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 6000);
        }

        setInterval(createHeart, 500);

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionText = document.querySelector(".container-2 p");

const noTexts = [
    "No 😢",
    "Still no? 🥺",
    "Are you sure? 😭",
    "Really really no?? 💔",
    "Last chance... 😔"
];

let clickCount = 0;

noBtn.addEventListener("click", () => {

    // Change text

    document.getElementById("catGif").src = "Sad Cat GIF.gif";
    questionText.textContent = noTexts[clickCount % noTexts.length];
    clickCount++;

    // Teleport randomly
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});


yesBtn.addEventListener("click", () => {

    // Change gif
    document.getElementById("catGif").src = "Happy-cat.gif";

    // Change text
    questionText.textContent = " I knew it!! 💕🥰 Message me now!";

    // Remove No button completely
    noBtn.style.display = "none";

    // Optional: disable Yes button so it can't be clicked again
    yesBtn.disabled = true;

    // Big heart explosion
    for (let i = 0; i < 50; i++) {
        createHeart();
    }
});


