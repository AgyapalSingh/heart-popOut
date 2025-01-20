// document.addEventListener("DOMContentLoaded", () => {
//   const heartContainer = document.querySelector(".heart-container");
//   const numberOfHearts = 100;
//   for (let i = 0; i < numberOfHearts; i++) {
//     const heart = document.createElement("div");
//     heart.classList.add("heart");
//     heartContainer.appendChild(heart);
//   }

//   const hearts = document.querySelectorAll(".heart");

//   hearts.forEach((heart, index) => {
//     gsap.to(heart, {
//       duration: 2 + Math.random() * 3,
//       x: () => gsap.utils.random(-window.innerWidth / 2, window.innerWidth / 2),
//       y: () =>
//         gsap.utils.random(-window.innerHeight / 2, window.innerHeight / 2),
//       opacity: 1,
//       ease: "power4.out",
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const heartContainer = document.querySelector(".heart-container");
//   const numberOfHearts = 100;

//   // Create heart elements
//   for (let i = 0; i < numberOfHearts; i++) {
//     const heart = document.createElement("div");
//     heart.classList.add("heart");
//     heartContainer.appendChild(heart);
//   }

//   const hearts = document.querySelectorAll(".heart");

//   // GSAP timeline for each heart
//   hearts.forEach((heart) => {
//     const timeline = gsap.timeline(); // Loop the animation

//     timeline
//       .to(heart, {
//         duration: 2 + Math.random() * 3, // Random duration between 2 to 5 seconds
//         x: () => gsap.utils.random(-window.innerWidth / 2, window.innerWidth / 2),
//         y: () =>
//           gsap.utils.random(-window.innerHeight / 2, window.innerHeight / 2),
//         opacity: 1,
//         ease: "power4.out",
//       })
//       .to(heart, {
//         duration: 2 + Math.random() * 3, // Random duration for moving out
//         x: () =>
//           gsap.utils.random(
//             window.innerWidth,
//             window.innerWidth * 1.5
//           ), // Move out to the right
//         y: () =>
//           gsap.utils.random(
//             -window.innerHeight,
//             window.innerHeight * 1.5
//           ), // Move out to the bottom
//         opacity: 0,
//         ease: "power4.in", // Accelerates as it moves out
//       });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const heartContainer = document.querySelector(".heart-container");
  const gree = document.querySelector(".HP");
  const numberOfHearts = 50;

  // Create heart elements
  for (let i = 0; i < numberOfHearts; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heartContainer.appendChild(heart);
  }

  const hearts = document.querySelectorAll(".heart");

  hearts.forEach((heart) => {
    const timeline = gsap.timeline();

    let startX = gsap.utils.random(
      -window.innerWidth / 2,
      window.innerWidth / 2
    );
    let startY = gsap.utils.random(
      -window.innerHeight / 2,
      window.innerHeight / 2
    );

    timeline
      .to(heart, {
        duration: 2 + Math.random() * 3,
        x: startX,
        y: startY,
        opacity: 1,
        ease: "power4.out",
      })
      .to(gree, {
        delay: 3,
        duration: 3,
        opacity: 1,
        scale: 6,
        zIndex: 10,
        scrub: 1,
      })
      .to(heart, {
        delay: 3,
        opacity: 0,
      })
      .to(gree, {
        delay: 3,
        opacity: 0,
      });
  });
});
