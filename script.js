document.addEventListener("DOMContentLoaded", () => {
  const moodButtons = document.querySelectorAll(".mood-btn");
  const moodMessage = document.getElementById("mood-message");

  const moods = {
    Calm: "Try some Lo-Fi beats to keep your flow serene 🎧",
    Motivated: "You’re on fire! Play energetic instrumentals 🔥",
    Tired: "Soft piano tunes will refresh your energy 💫",
    Happy: "Celebrate your mood with upbeat acoustic vibes 🎶"
  };

  moodButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const mood = btn.textContent.trim();
      moodMessage.textContent = moods[mood];
      moodMessage.style.opacity = 1;

      btn.classList.add("active");
      setTimeout(() => btn.classList.remove("active"), 300);
    });
  });
});
// --- SkillSync Join Form ---
document.addEventListener("DOMContentLoaded", () => {
  const joinBtn = document.getElementById("joinBtn");

  if (joinBtn) {
    joinBtn.addEventListener("click", async () => {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;

      const response = await fetch("http://localhost:8080/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone })
      });

      const message = await response.text();
      alert(message);
    });
  }
});
console.log("Script running...");

document.addEventListener("DOMContentLoaded", () => {
  const moodButtons = document.querySelectorAll(".mood-btn");

  moodButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert(`You clicked ${btn.textContent.trim()}!`);
    });
  });
});
document.getElementById("joinForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const response = await fetch("http://localhost:9098/join", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, phone }),
  });

  const result = await response.text();
  alert(result);
});