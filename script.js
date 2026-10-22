const openBtn = document.getElementById("openBtn");
const welcome = document.getElementById("welcome");
const surprise = document.getElementById("surprise");
const musicBtn = document.getElementById("musicBtn");
const birthdaySong = document.getElementById("birthdaySong");

openBtn.addEventListener("click", () => {
  welcome.classList.add("hidden");
  surprise.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

musicBtn.addEventListener("click", async () => {
  if (birthdaySong.paused) {
    try {
      await birthdaySong.play();
      musicBtn.textContent = "Ⅱ Pause birthday song";
    } catch (error) {
      musicBtn.textContent = "Couldn't play song — check Birthday.mp3";
    }
  } else {
    birthdaySong.pause();
    musicBtn.textContent = "♫ Play your birthday song";
  }
});

birthdaySong.addEventListener("pause", () => {
  musicBtn.textContent = "♫ Play your birthday song";
});

birthdaySong.addEventListener("play", () => {
  musicBtn.textContent = "Ⅱ Pause birthday song";
});
