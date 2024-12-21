// Set initial styles for ".row-marquee"
gsap.set(".row-marquee", {
  scale: 3,
});

// Function to create spans for each character in a text
function createSpan(txt, targetElement) {
  let clutter = "";
  const separatedTxt = txt.split("");
  for (let char of separatedTxt) {
    clutter += `<span>${char}</span>`;
  }
  targetElement.innerHTML = clutter;
}

// Targeting and setting spans for the short tagline
const targetText = document.querySelector(".short-tagline > p");
createSpan(targetText.innerText, targetText);
gsap.set(".short-tagline > p > span", { opacity: 0 });

// Animation for ".slide"
gsap.to(".slide", {
  scrollTrigger: {
    start: "top top",
    end: "bottom bottom",
    trigger: ".real",
    scrub: 2,
  },
  xPercent: -200,
  duration: 2,
});

// Function for tagline section animation
function tagLineSectionAnimation() {
  const taglineDescribe = document.querySelector(".tagline-describe");
  createSpan(taglineDescribe.innerText, taglineDescribe);

  gsap.set(".tagline-describe > span", { opacity: 0 });

  gsap.to(".tagline-describe > span", {
    opacity: 1,
    stagger: 0.1,
    duration: 12,
    ease: "elastic",
    scrollTrigger: {
      trigger: ".tagline",
      start: "top 60%",
      end: "bottom top",
      scrub: 2,
    },
  });
}

// Function for hero section animation
function heroSectionAnimation() {
  const t1 = gsap.timeline({
    scrollTrigger: {
      scrub: 2,
      trigger: ".hero-container",
      start: "top top",
      end: "bottom bottom",
    },
  });

  t1.to(
    ".video-container",
    {
      "--clip": "0%",
      duration: 4,
      ease: "linear",
    },
    "a"
  );

  t1.to(
    ".row-marquee",
    {
      scale: 1,
      duration: 3,
      ease: Power2,
    },
    "a"
  );

  t1.to(
    ".row.left",
    {
      transform: "translateX(-15%)",
      duration: 4,
      ease: "linear",
    },
    "b"
  );

  t1.to(
    ".row.right",
    {
      transform: "translateX(-12%)",
      duration: 4,
      ease: "linear",
    },
    "b"
  );

  t1.to(
    ".short-tagline > p > span",
    {
      stagger: 0.1,
      opacity: 1,
      duration: 0.4,
      ease: Power2,
    },
    "a"
  );
}

// Function for team section animation
function ourTeamSectionAnimation() {
  const teamCards = document.querySelectorAll(".team-card");

  teamCards.forEach((card) => {
    card.addEventListener("mousemove", function (event) {
      gsap.to(this.querySelector(".overlay-blue"), {
        height: "100%",
        ease: "linear",
      });

      gsap.to(this.querySelector(".overlay-photo-showecase"), {
        opacity: 1,
        duration: 0.4,
        ease: "power2.inOut",
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, event.x),
        backgroundColor: "red",
      });
    });

    card.addEventListener("mouseleave", function () {
      gsap.to(this.querySelector(".overlay-blue"), {
        height: "0%",
        ease: "power2.inOut",
      });

      gsap.to(this.querySelector(".overlay-photo-showecase"), {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        transform: "translateX(-50%,-50%)",
      });
    });
  });
}

// Function to change color theme on scroll
function changeColorThemeOnScroll() {
  document.querySelectorAll(".section").forEach((element) => {
    ScrollTrigger.create({
      trigger: element,
      start: "top 50%",
      end: "bottom 50%",
      scrub: true,
      onEnter: () => {
        document.body.setAttribute("theme", element.dataset.color);
      },
      onEnterBack: () => {
        document.body.setAttribute("theme", element.dataset.color);
      },
    });
  });
}

// Initialize animations and locomotive scroll
changeColorThemeOnScroll();
heroSectionAnimation();
tagLineSectionAnimation();
ourTeamSectionAnimation();

(function () {
  const locomotiveScroll = new LocomotiveScroll();
})();



document.querySelector(".button-effect").addEventListener("mouseenter", function (e) {
  console.log("hover")
  gsap.to(this.querySelector(".row-grow"), {
    width:"100%",
    backgroundColor:"#000",
    duration: 1,
    ease: "power2.out", 
  });
  
});


document.querySelector(".button-effect").addEventListener("mouseleave", function (e) {
  console.log("hover")
  gsap.to(this.querySelector(".row-grow"), {
    width:"0%",
    duration: 1,
    ease: "power2.out", 
  });
});



const t3 = gsap.timeline({paused:true});
t3.to("#open-nav",{
  duration:1,
  top:0
}).to('.nav-video',{
  scale:1,
  ease:Power2
}).from('.text-effect.flag',{
  y:30,
  duration:1,
  stagger:0.1,
  opacity:0
}).from('.navbar-tagline > span',{
  x:20,
  duration:1,
  opacity:0,
  stagger:0.1
},"b").from('.social-link > div',{
  x:20,
  duration:1,
  opacity:0,
  stagger:0.1
},"b")



document.getElementById("open-navbar").addEventListener("click",function(){
  t3.play();
  console.log("clicked")
});

document.getElementById("close-nav").addEventListener("click",function(){
  t3.reverse()
});

