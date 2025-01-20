document.addEventListener("DOMContentLoaded", () => {
  const heartContainer = document.querySelector(".heart-container");
  const numberOfHearts = 100;
  for (let i = 0; i < numberOfHearts; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heartContainer.appendChild(heart);
  }

  const hearts = document.querySelectorAll(".heart");

  hearts.forEach((heart, index) => {
    gsap.to(heart, {
      duration: 2 + Math.random() * 3,
      x: () => gsap.utils.random(-window.innerWidth / 2, window.innerWidth / 2),
      y: () =>
        gsap.utils.random(-window.innerHeight / 2, window.innerHeight / 2),
      opacity: 1,
      ease: "power4.out",
    });
  });
});
