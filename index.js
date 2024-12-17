gsap.set(".row-marquee", {
  scale: 3,
});



function createSpan(txt, targetElement) {
  let clutter = "";
  const seperatedTxt = txt.split("");

  for (let char of seperatedTxt) {
    clutter += `<span>${char}</span>`;
  }
  targetElement.innerHTML = clutter;
  gsap.set(".short-tagline > p > span" , {opacity:0})
}

const targetText = document.querySelector(".short-tagline > p");
createSpan(targetText.innerText, targetText);
const t1 = gsap.timeline({
  scrollTrigger: {
    scrub: 2,
    pin: true,
    trigger: ".hero-container",
    start: "top top",
    end: "bottom top",
    
  },
});

t1.to(
  ".video-container",
  {
    "--clip": "0%",
    duration: 4,
    ease: "linear",
  },"a"
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
t1.to(".row.left",{
    transform:"translateX(-40%)",
    duration: 4,
    ease: "linear",
},"a")
t1.to(".row.right",{
    transform:"translateX(-20%)",
    duration: 4,
    ease: "linear",
},"a")

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

const t2 = gsap.timeline({
    scrollTrigger:{
        trigger:"testimonial",
        scrub:2,
        pin:true,
        start:"top top",
        end:"bottom top"
    }
})

t2.to(".row-top",{
    transform:"translateY(20%)",
    duration: 2,
    ease: "linear",
},'b')

t2.to(".row-bottom",{
    transform:"translateY(0%)",
    duration: 2,
    ease: "linear",
},'b')

document.addEventListener("DOMContentLoaded", function () {
    console.log("loaded");
    document.querySelector(".loader").style.display = "none";
});


