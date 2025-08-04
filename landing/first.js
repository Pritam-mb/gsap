var tl = gsap.timeline({defaults: {duration: 1}});
tl.from("h2", {
    opacity: 0,
    duration: 1,
    y: -10,
  
}).from(".links",{
    opacity: 0,
    duration: 0.5,    
    y: -10,
    stagger: 0.5,
})
    

gsap.to("#page1 h1",{
    opacity: 0,
    duration: 1,
    y: -10,
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "body",
        markers: true,
        start:"top 20%",
        end: "top 10%",
        scrub: 2,
        // pin: true,
    }
})
// gsap.from("#page2 p",{
//     opacity: 0,
//     delay: 1,
//     duration: 2,
//     y: 30,  
//     transform : "translatex(-200%)",
//     scrollTrigger: {
//         trigger: "#page2 p",
//         scroller: "body",
//     scrub: 2}
// })

gsap.to("#page2 p",{
    transform : "translateX(-150%)",
    delay:1,
    duration: 3,
    scrollTrigger: {
        trigger: "#page2 p",
        scroller: "body",
         markers: true,
        start:"top 30%",
       
       
        end: "top 20%",
          scrub: 2,
        // pin: true,
    }
})

// Mouse Curve Animation with GSAP
const page3 = document.querySelector("#page3");
const pathElement = document.querySelector("svg path");
const finalPath = "M 60 100 Q 500 100 1200 100";

page3.addEventListener("mousemove", function (e) {
  const bounds = page3.getBoundingClientRect();
  const relativeX = e.clientX - bounds.left;
  const relativeY = e.clientY - bounds.top;

   const clampedY = Math.max(40, Math.min(relativeY, 160));

  // Clamp X to stay away from the endpoints (60 and 1200)
  const clampedX = Math.max(200, Math.min(relativeX, 1060));

  const newPath = `M 60 100 Q ${clampedX} ${clampedY} 1200 100`;


  gsap.to(pathElement, {
    attr: { d: newPath },
    duration: 0.3,
    ease: "power2.out"
  });
});

page3.addEventListener("mouseleave", () => {
  gsap.to(pathElement, {
    attr: { d: finalPath },
    duration: 0.8,
    ease: "elastic.out(1, 0.2)"
  });
});
 var main= document.querySelector(".main")
        var cursor= document.querySelector("#cursor");

        main.addEventListener("mousemove", function(e){
           gsap.to(cursor,{
            x:e.x,
            y:e.y,
            duration: 0.3,
            ease: "back.out"
           })
        });

        var tl2 = gsap.timeline()
    // Animate car moving on scroll and reveal text
tl2.to(".carimg", {
  // transform : "translateX(+150%)",
  x:1100,
    delay:1,
    duration: 3,// moves right
  scrollTrigger: {
    trigger: ".carimg",
    scroller: "body",
    markers: true,
    start: "top 80%",
    end: "top 30%",
    scrub: 2,

  }}).from(".cartext", {
  opacity: 0,
  y: 30,
  delay: 4,
  scrollTrigger: {  
    trigger: ".cartext",
    scroller: "body",
    markers: true,
    start: "top 80%",
    end: "top 30%",
    scrub: 2,
  }})   

  tl2.to(".car2", { 
    scale: 3,
    duration: 1,
    scrollTrigger: {  
      trigger: ".car2",
      scroller: "body",
      markers: true,
      start: "top 80%",
      end: "top 30%",
      scrub: 2,
      // pin: true,
    } })