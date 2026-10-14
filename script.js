
// NAVBAR ANIMATION 

let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    // Scroll down → navbar hide
    navbar.classList.add("hide");
  } else {
    // Scroll up → navbar show
    navbar.classList.remove("hide");
  }

  lastScroll = currentScroll;
});

gsap.to(".track", {
  xPercent: -50,
  duration: 15,
  repeat: -1,
  ease: "none"
});
// THIS IS ROUND ANIMATION
gsap.to(".circle-text", {
  rotation: 360,
  duration:30,
  ease: "none",
  scrollTrigger: {
    trigger: ".circle-text",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 6
  }
});

// TEXT CHANGE ANIMATION 
const text = document.getElementById("change_text");

setInterval(() => {
  change();
}, 5000);

function change() {

  // Animate current text out
  gsap.to(text, {
    y: -30,
    opacity: 0,
    duration: 0.5,
    ease: "power2.in",
    onComplete: () => {

      // Change text
      if (text.innerText === "digital excellence.") {
        text.innerText = "creative websites.";
      } 
      else if (text.innerText === "creative websites.") {
        text.innerText = "distinctive identities.";
      } 
      else {
        text.innerText = "digital excellence.";
      }

      // Reset position and animate new text in
      gsap.fromTo(text,
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out"
        }
      );

    }
  });
}
gsap.registerPlugin(ScrollTrigger);

const cards = gsap.utils.toArray(".animate > div");

cards.forEach((card, index) => {
  if (index === cards.length - 1) return;

  gsap.to(card, {
    ease: "none",
    
    scrollTrigger: {
      trigger: cards[index + 1],
      start: "top bottom",
      end: "top top",
      scrub: true,
    },
  });
});


