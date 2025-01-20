document.addEventListener("DOMContentLoaded", () => {
  const heartContainer = document.querySelector(".heart-container");
  const numberOfHearts = 100; // You can change the number of hearts here

  // Dynamically create hearts
  for (let i = 0; i < numberOfHearts; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heartContainer.appendChild(heart);
  }

  const hearts = document.querySelectorAll(".heart");

  // Spread hearts out from the center with GSAP animation
  hearts.forEach((heart, index) => {
    gsap.to(heart, {
      duration: 2 + Math.random() * 3, // Randomize duration
      // x: Math.random() * (window.innerWidth - 50) - (window.innerWidth / 2),
      // y: Math.random() * (window.innerHeight - 50) - (window.innerHeight / 2),
      x: () => gsap.utils.random(-window.innerWidth / 2, window.innerWidth / 2),
      y: () =>
        gsap.utils.random(-window.innerHeight / 2, window.innerHeight / 2),
      opacity: 1,
      // delay: index * 0.2, // Delay each heart animation
      ease: "power4.out",
    });
  });
});
