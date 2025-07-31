document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("typed-text");
  const texts = ["Hello, I am H", "I am a Developer","I am a Youtuber"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }
    textElement.textContent = currentText.substring(0, charIndex);

    let typingSpeed = isDeleting ? 40 : 75;

    if (!isDeleting && charIndex === currentText.length) {
      typingSpeed = 1000; // Pause before deleting
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typingSpeed = 500; // Pause before typing next string
    }

    setTimeout(type, typingSpeed);
  }

  type();
});

// Set the current year in the footer automatically
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  // Toggle show/hide menu
  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  // Close menu on link click
  document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
    });
  });
});


