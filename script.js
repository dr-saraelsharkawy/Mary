/*
  PERSONALIZE YOUR BIRTHDAY WEBSITE HERE.
  Edit the name, signature, message, captions, and photo filenames below.
*/
const birthdaySettings = {
  friendName: "Mary",
  yourName: "Sara",
  pageTitle: "A Little Birthday Magic ♡",
  memories: [
    { caption: "The moments that make me smile every time." },
    { caption: "Proof that ordinary days can be special." },
    { caption: "More laughs, more stories, more us." }
  ]
};

document.title = birthdaySettings.pageTitle;
document.getElementById("hero-name").textContent = birthdaySettings.friendName;
document.getElementById("letter-name").textContent = birthdaySettings.friendName;
document.getElementById("footer-signature").textContent = `with love, ${birthdaySettings.yourName}`;

const openButton = document.getElementById("open-surprise");
const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function makeFloatingHeart() {
  const heart = document.createElement("span");
  heart.className = "float-heart";
  heart.textContent = ["♡", "♥", "✧"][Math.floor(Math.random() * 3)];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 20}px`;
  heart.style.animationDuration = `${5 + Math.random() * 4}s`;
  document.querySelector(".floating-decor").appendChild(heart);
  setTimeout(() => heart.remove(), 9500);
}

function celebrate() {
  const symbols = ["✦", "♥", "♡", "✧", "•"];
  const colors = ["#e6a5b9", "#d9c7ec", "#f0ce80", "#c3d9c8", "#f5c8b8"];
  for (let i = 0; i < 65; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.color = colors[Math.floor(Math.random() * colors.length)];
    piece.style.fontSize = `${10 + Math.random() * 15}px`;
    piece.style.animationDuration = `${2.2 + Math.random() * 2.4}s`;
    piece.style.animationDelay = `${Math.random() * 0.8}s`;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 5500);
  }
}

openButton.addEventListener("click", () => {
  celebrate();
  document.getElementById("memories").scrollIntoView({ behavior: "smooth" });
  showToast("Surprise! This little page is all for you ♡");
});

document.getElementById("wish-button").addEventListener("click", () => {
  const message = document.getElementById("wish-message");
  message.classList.add("show");
  celebrate();
  showToast("Wish sent into the universe ✨");
  document.getElementById("wish-button").textContent = "Wish sent ♡";
  document.getElementById("wish-button").disabled = true;
  document.getElementById("wish-button").style.opacity = ".8";
});

setInterval(makeFloatingHeart, 1800);


const birthdayMusic = document.getElementById("birthday-music");

openButton.addEventListener("click", async () => {
  try {
    await birthdayMusic.play();
  } catch (error) {
    console.error("Birthday music playback failed:", error);
  }
});

