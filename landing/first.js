var tl = gsap.timeline({defaults: {duration: 1}});
tl.from("h2", {
    opacity: 0,
    duration: 1,
    y: -10
}).from(".links",{
    opacity: 0,
    duration: 1,    
    y: -10,
    stagger: 0.5,
}).from("h1",{
    opacity: 0,
    duration: 1,    
    y: -20,
    
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
    scrollTrigger: {
        trigger: "#page2 p",
        scroller: "body",
        start:"top 40%",
    scrub: 2,
        markers: true,
        end: "top 30%",
    }
})