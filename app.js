// Rollover emoji shit

const messyWord = document.querySelector(".messy");
const emoji = document.createElement("span");

// Liste d'emojis aléatoires
const emojis = ["💩", "🤪", "😂", "😱", "👎", "👻", "🫣", "🙈", "🤮"];

emoji.classList.add("emoji");
document.body.appendChild(emoji);

// Fonction pour suivre la souris
function followCursor(event) {
    emoji.style.left = `${event.pageX - 60}px`; // Décalage horizontal
    emoji.style.top = `${event.pageY - 80}px`; // Décalage vertical
}

// Affiche un emoji aléatoire au survol
messyWord.addEventListener("mouseenter", () => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.textContent = randomEmoji;
    emoji.style.opacity = "1";
    document.addEventListener("mousemove", followCursor);
});

// Cache l'emoji quand la souris quitte le mot
messyWord.addEventListener("mouseleave", () => {
    emoji.style.opacity = "0";
    document.removeEventListener("mousemove", followCursor);
});




// Rollover photo

const nameElement = document.querySelector(".name");
const img = document.createElement("img");

img.src = "img/photo.png"; // Remplace par le lien de ta photo
img.alt = "Photo de Cédric";
img.style.position = "absolute";
img.style.width = "300px"; // Taille de l'image
img.style.borderRadius = "10px"; // Coins arrondis
img.style.display = "none"; // Cachée au départ
img.style.transition = "opacity 0.2s"; // Ajoute la transition d'opacité

document.body.appendChild(img);

nameElement.addEventListener("mouseenter", (event) => {
    img.style.display = "block";
    img.style.opacity = "0"; // Commence par être invisible
    img.style.left = `${event.pageX - 60}px`; // Légèrement à droite
    img.style.top = `${event.pageY - 80}px`; // Légèrement en dessous

    // Ajoute un délai pour que l'opacité change après le display
    setTimeout(() => {
        img.style.opacity = "1"; // L'image devient visible avec un fondu
    }, 10); // Petit délai pour que la transition prenne effet
});

nameElement.addEventListener("mousemove", (event) => {
    img.style.left = `${event.pageX + 10}px`;
    img.style.top = `${event.pageY + 10}px`;
});

nameElement.addEventListener("mouseleave", () => {
    img.style.opacity = "0"; // L'image devient invisible avec un fondu
    setTimeout(() => {
        img.style.display = "none"; // Cache l'image après la transition
    }, 200); // Délai pour attendre la fin de la transition
});
