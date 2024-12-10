document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;   // Referanse til body-elementet
  const normalModeButton = document.getElementById("normalModeButton");
  const starWarsModeButton = document.getElementById("starWarsModeButton");
  const lightsaberOffSound = document.getElementById("lightsaberOffSound");
  const lightsaberOnSound = document.getElementById("lightsaberOnSound");
  const crawlElement = document.querySelector(".crawl");


  // Laster lagret tema, normal eller star wars
  if (localStorage.getItem("theme") === "star-wars") {
    body.classList.add("star-wars");
  }

  // bruker local storrage til å hente tema
  normalModeButton.addEventListener("click", () => {
    // Sjekk om 'star-wars'-klassen er satt
    if (body.classList.contains("star-wars")) {
      lightsaberOffSound.play(); // Spill av lyden for å slå av lyssabelen kun hvis i Star Wars-modus
      body.classList.remove("star-wars"); 
      localStorage.setItem("theme", "normal");
    }
  });

  starWarsModeButton.addEventListener("click", () => {
    // Sjekk om 'star-wars'-klassen ikke er satt
    if (!body.classList.contains("star-wars")) {
      lightsaberOnSound.play(); // Spill av lyden for å slå på lyssabelen kun hvis ikke i Star Wars-modus
      body.classList.add("star-wars"); 
      localStorage.setItem("theme", "star-wars");
    }
  });
});

// Kode for HTML og CSS editor - inspirasjon: https://www.geeksforgeeks.org/how-to-make-live-coding-editor-using-html-css-and-javascript/
function updatePreview() {
  const htmlContent = document.getElementById("html-editor").value;
  const cssContent = document.getElementById("css-editor").value;
  const iframe = document.getElementById("preview");

  // Kombiner HTML og CSS
  const combinedContent = `
    <html>
      <head>
        <style>${cssContent}</style>
      </head>
      <body>
        ${htmlContent}
      </body>
    </html>
  `;

  // Oppdater iframe
  iframe.srcdoc = combinedContent;
}

// For quizen
document.getElementById("submit-quiz").addEventListener("click", function () {
  let score = 0;
  const answers = {
    q1: "1",
    q2: "1",
    q3: "1",
    q4: "1",
    q5: "1",
    q6: "1",
    q7: "1",
    q8: "1",
    q9: "1",
    q10: "1",
  };

  // Beregn poengsum
  for (let question in answers) {
    const selected = document.querySelector(
      `input[name="${question}"]:checked`
    );
    if (selected && selected.value === answers[question]) {
      score++;
    }
  }

  // Vis resultatet
  document.getElementById("score-value").innerText = `${score}`;
  document.getElementById("quiz-result").style.display = "block";

  // Scroll til toppen for å vise resultatet
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Tilbakestill quiz-funksjon
document.getElementById("reset-quiz").addEventListener("click", function () {
  // Fjern valgte svar
  const inputs = document.querySelectorAll('input[type="radio"]');
  inputs.forEach((input) => (input.checked = false));

  // Skjul resultatvindu
  document.getElementById("quiz-result").style.display = "none";

  // Scroll til toppen (valgfritt)
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Parallax-effekt
window.addEventListener("scroll", function () {
  const parallax = document.querySelector(".hero");
  if (parallax) {
    let scrollPosition = window.scrollY;
    parallax.style.backgroundPositionY = -(scrollPosition * 0.5) + "px";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const crawlElement = document.querySelector(".crawl");

  if (crawlElement) {
    crawlElement.addEventListener("animationend", () => {
      crawlElement.style.display = "none";
    });
  }
});
