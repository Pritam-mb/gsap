gsap.from("h1",{
    opacity: 0,
    duration: 1,
    y: 30,
    stagger: 0.5,
})
gsap.to(".box1", {
x:1200,
duration: 2,
delay: 1,
rotate: 360,
repeat: -1,
yoyo: true,   
borderRadius: "50%", 
})
 var tl = gsap.timeline({defaults: {duration: 1}});
 tl.to("#box2", {x: 1400, rotation: 360,borderRadius: "50%", })
   .to("#box3", {x: 1400, rotation: 360,borderRadius: "50%", })    
   .to("#box4", {x: 1400, rotation: 360,borderRadius: "50%", })