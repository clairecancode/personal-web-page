const titleElement = document.querySelector(".typing-title");

const titleText =
  titleElement?.dataset.title || "";

const typingSound =
  document.getElementById("typing-sound");

let index = 0;

function typeText() {

  if (!titleElement) return;

  if (index < titleText.length) {

    titleElement.innerHTML +=
      titleText.charAt(index);

    if (typingSound) {
      typingSound.currentTime = 0;
      typingSound.play().catch(() => {});
    }

    index++;

    setTimeout(typeText, 120);

  } else {

    titleElement.innerHTML +=
      '<span class="cursor">|</span>';

  }
}

window.addEventListener("load", typeText);

