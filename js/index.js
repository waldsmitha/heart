const mouse = document.querySelector(".cursor");
const burger = document.querySelector("#burger");
const mobileNav = document.querySelector(".mobile-nav");

function cursor(e) {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
  // console.log(e.target.classList.contains("active"));
  e.target.classList.contains("active")
    ? gsap.to(mouse, {
        height: "10rem",
        width: "10rem",
        duration: 0.25,
      })
    : gsap.to(mouse, {
        height: "5rem",
        width: "5rem",
        duration: 0.25,
      });
}

function toggleNav(e) {
  mobileNav.classList.toggle("nav-active");
}

mobileNav.onclick = toggleNav;
window.addEventListener("mousemove", cursor);

//GSAP Animations
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 2 });
ScrollTrigger.defaults({
  toggleActions: "restart none play reverse",
  //markers: true,
});

const tl = gsap.timeline({ defaults: { duration: 3, yoyo: true } });

tl.to("#blue-face", {
  scale: ".95",
  y: 10,
  x: 10,
  repeat: -1,
});

const tlNav = gsap.timeline({ defaults: { duration: 0.5 } });
tlNav.from("#logo", {
  y: "100%",
});
tlNav.from(".nav-item", {
  y: "100%",
  opacity: 0,
  duration: 0.25,
  stagger: 0.1,
});

gsap.to("#intro-message", {
  scrollTrigger: {
    trigger: "#intro-message",
    start: "top 50%",
    end: "bottom 45%",
    scrub: 1,
    //markers: true,
  },
  opacity: 0,
  y: -100,
  duration: 1,
});

// gsap.from(".text", {
//   scrollTrigger: {
//     trigger: "#red-man",
//     //start: "top bottom",
//     //start: "20px 80%",
//     start: "top 50%",
//     //end: "50% 50%",
//     //scrub: true,
//     //scrub: 1,
//     //pin: true,
//     //true means it assumes the trigger, can write anything there, like "#s2"
//     //pin: ".hero",
//     //markers: true,
//     //Default is toggleActions: "play none none none"
//     //toggleActions: "restart pause play reverse",
//   },
//   x: 400,
//   duration: 1,
//   opacity: 0,
// });

//News
gsap.from("#red-man", {
  scrollTrigger: {
    trigger: "#red-man",
    start: "top 50%",
  },
  rotate: "-45deg",
  duration: 1,
  opacity: 0,
});

gsap.from("#red-man-img", {
  scrollTrigger: {
    trigger: "#red-man",
    start: "top 50%",
  },
  // x: -400,
  duration: 1,
  opacity: 0,
  ease: "power",
  scale: 1.5,
});

gsap.from(".reveal-p", {
  scrollTrigger: {
    trigger: ".reveal-p",
    start: "40% bottom",
  },
  y: 400,
  stagger: 0.35,
  duration: 0.75,
  opacity: 0,
  ease: "sine",
});

//Albums
const tlAlbums = gsap.timeline({ defaults: { duration: 0.5 } });

const leftElements = document.querySelectorAll(".left");
const rightElements = document.querySelectorAll(".right");

leftElements.forEach((item) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 50%",
    },
    duration: 0.75,
    opacity: 0,
    x: "-100%",
    rotate: "5deg",
    stagger: 0.25,
    ease: "power",
  });
});

rightElements.forEach((item) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 50%",
    },
    duration: 0.75,
    opacity: 0,
    x: "100%",
    rotate: "5deg",
    stagger: 0.25,
    ease: "power",
  });
});

gsap.from("#album-header", {
  scrollTrigger: {
    trigger: "#albums",
    start: "top 50%",
  },
  duration: 1,
  opacity: 0,
  y: "100%",
  stagger: 0.25,
  ease: "power",
});

//Tour

gsap.from(".date", {
  scrollTrigger: {
    trigger: "#tour",
    start: "top 50%",
  },
  x: "100%",
  stagger: 0.25,
  duration: 0.75,
  opacity: 0,
  ease: "expo",
  rotation: -45,
});
gsap.from("#yellow-date", {
  scrollTrigger: {
    trigger: "#tour",
    start: "top 50%",
  },
  y: "100%",
  duration: 1,
  delay: 0.5,
  opacity: 0,
  ease: "sine",
});

gsap.from(".circle", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 50%",
  },
  // y: "100%",
  scale: 2,
  duration: 1,
  delay: 0.25,
  // opacity: 0,
  ease: "sine",
});

//White Screen Fade Out

$(document).ready(function () {
  $("#load-fade").animate(
    {
      opacity: 0,
    },
    800,
    function () {
      $("#load-fade").hide().delay(500);
    }
  );
});
