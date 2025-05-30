// gsap.to("#box1",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//     scale:"0.5",
// Then reverse back to its original state (due to yoyo: true),

// Repeat the process forever (because repeat: -1).
//     repeat:-1,
//     yoyo:true
// })
// gsap.to("#box2",{
//     x:500,
//     duration:2,
//     delay:1
// })
// gsap.from("#box2",{
//     x:1200,
//     duration:2,
//     delay:1
// })
// gsap.from("h1",{
//     ocacity:0,
//     color:"red",
//     y:20,
//     duration:2,
//     delay:1,
//     stagger:0.3
// })
var t1=gsap.timeline();
t1.from("h1",{
    ocacity:0,
    y:-30,
    duration:1,
    delay:0.5
})
t1.from("h2",{
    ocacity:0,
    y:-30,
    duration:1,
    delay:0.5,
    stagger:0.3
})


tl.to("#box1",{
    x:1500,
    rotate:360,
    duration:1.5,
    delay:1
})
tl.to("#box2",{
    x:1500,
    duration:1.5
})