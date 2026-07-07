
document.addEventListener("DOMContentLoaded", () => {
  const titleElement = document.querySelector(".typing-title");
  if (!titleElement) return;

  const titleText = titleElement.dataset.title || "";
  const typingSound = document.getElementById("typing-sound");

  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  let index = 0;

  function typeText() {
    if (index < titleText.length) {
      titleElement.textContent += titleText[index];

      // optional sound (only desktop)
      if (!isMobile && typingSound && index % 3 === 0) {
        typingSound.currentTime = 0;
        typingSound.play().catch(() => {});
      }

      index++;
      setTimeout(typeText, 55);
    }
  }

  typeText();
});
