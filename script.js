// === Falling Hearts Background ===
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s"; // 3–6s
  heart.style.fontSize = 18 + Math.random() * 20 + "px";

  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}
setInterval(createHeart, 400);

// === Timer Since First Meeting ===
function updateTimer() {
  const firstMeet = new Date("2025-09-08T00:00:00"); // meeting date
  const now = new Date();
  const diff = now - firstMeet;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("elapsedTime").textContent =
    `${days} Days ${hours} Hrs ${minutes} Min ${seconds} Sec 💞`;
}
setInterval(updateTimer, 1000);
updateTimer(); // run once instantly

// === Ice Cream Rain ===
// === Ice Cream Burst from Button (Confetti Style) ===
document.getElementById("iceButton").addEventListener("click", () => {
  const button = document.getElementById("iceButton");
  const rect = button.getBoundingClientRect();

  for (let i = 0; i < 25; i++) {
    setTimeout(() => {
      const emoji = document.createElement("span");
      emoji.textContent = "🍦";
      emoji.style.position = "fixed";
      emoji.style.left = rect.left + rect.width / 2 + "px"; // center of button
      emoji.style.top = rect.top + rect.height / 2 + "px"; // middle of button
      emoji.style.fontSize = 20 + Math.random() * 20 + "px";
      emoji.style.pointerEvents = "none";

      // Random angle & speed for burst
      const angle = Math.random() * 2 * Math.PI; // 0 to 360°
      const speed = 100 + Math.random() * 150; // px per second
      const gravity = 200; // downward pull

      const duration = 2000 + Math.random() * 1000; // 2–3s

      // Use WAAPI animate()
      emoji.animate(
        [
          { transform: `translate(0, 0)`, opacity: 1 },
          {
            transform: `translate(${Math.cos(angle) * speed}px, ${
              Math.sin(angle) * speed + gravity
            }px)`,
            opacity: 0,
          },
        ],
        {
          duration: duration,
          easing: "ease-out",
          fill: "forwards",
        }
      );

      document.body.appendChild(emoji);

      setTimeout(() => {
        emoji.remove();
      }, duration);
    }, i * 50); // little stagger for "boom"
  }
});

// === Kissi Shower Burst from Button (😘 Confetti Style) ===
document.getElementById("kissiButton").addEventListener("click", () => {
  const button = document.getElementById("kissiButton");
  const rect = button.getBoundingClientRect();

  for (let i = 0; i < 25; i++) {
    setTimeout(() => {
      const emoji = document.createElement("span");
      emoji.textContent = "😘";
      emoji.style.position = "fixed";
      emoji.style.left = rect.left + rect.width / 2 + "px";
      emoji.style.top = rect.top + rect.height / 2 + "px";
      emoji.style.fontSize = 20 + Math.random() * 20 + "px";
      emoji.style.pointerEvents = "none";

      // Random burst angle & speed
      const angle = Math.random() * 2 * Math.PI;
      const speed = 100 + Math.random() * 150;
      const gravity = 200;
      const duration = 2000 + Math.random() * 1000;

      emoji.animate(
        [
          { transform: `translate(0, 0)`, opacity: 1 },
          {
            transform: `translate(${Math.cos(angle) * speed}px, ${
              Math.sin(angle) * speed + gravity
            }px)`,
            opacity: 0,
          },
        ],
        {
          duration: duration,
          easing: "ease-out",
          fill: "forwards",
        }
      );

      document.body.appendChild(emoji);

      setTimeout(() => {
        emoji.remove();
      }, duration);
    }, i * 50);
  }
});

// === Hero & Heroine are always visible ===
// Button toggles the special memory photo below
const photoBtn = document.getElementById("photoButton");
const photoBox = document.getElementById("photoBox");

photoBtn.addEventListener("click", () => {
  if (photoBox.classList.contains("hidden")) {
    // Show extra photo
    photoBox.classList.remove("hidden");
    photoBox.style.opacity = 0;
    photoBox.style.transition = "opacity 1s ease";
    setTimeout(() => (photoBox.style.opacity = 1), 10);

    // Change button text
    photoBtn.textContent = "🙈 Hide Photo";
  } else {
    // Hide extra photo
    photoBox.style.opacity = 0;
    setTimeout(() => {
      photoBox.classList.add("hidden");
      photoBtn.textContent = "📸 Show Our Photo";
    }, 1000);
  }
});

// Typewriter Effect for Love Note
const loveMessage = `September 8, 2025 - Your Birthday it was✨ 
That night, with trembling hands and a hopeful smile, 
I asked you to be mine forever...
From that moment everything changed!!
Our bond, our story, our forever...

You're not just a part of my life...
You're my whole world, my peace, my home.

All I want to say -
Tuktukiiii Babyyyyyy, I will love you endlessly, unconditionally, eternally.`;

let index = 0;
function typeWriter() {
  if (index < loveMessage.length) {
    document.getElementById("love-message").innerHTML += loveMessage.charAt(index);
    index++;
    setTimeout(typeWriter, 60); // typing speed
  }
}
window.onload = typeWriter;
