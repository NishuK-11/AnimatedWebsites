

// gsap.from("#id1 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
// })
// gsap.from("#id2 #box",{
//     scale:0,
//     duration:2,
//     rotate:360,
//     scrollTrigger:{
//         trigger: "#id2 #box",
//         scroller:"body",
//         start: "top 60%",
//         end: "bottom top",
//         // scrub: true,
//         markers: true
//     }
// })
// gsap.from("#id3 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
//     scrollTrigger: "#id3 #box"
// })


// gsap.from("#id2 h1",{
//     opacity: 0,
//     x:500,
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#id2 h1",
//         scroller: "body",
//         start: "top 60%",
//         end: "bottom top",
//         // scrub: true,
//         markers: true
//     }
// })
// gsap.from("#id2 h2",{
//     opacity: 0,
//     x:-500,
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#id2 h1",
//         scroller: "body",
//         start: "top 20%",
//         end: "bottom top",
//         // scrub: true,
//         markers: true
//     }
// })

gsap.from("#id2 #box", {
    scale: 0,
    opacity: 0,
    rotate: 720,
    duration: 1,
    scrollTrigger: {
        trigger: "#id2 #box",
        scroller: "body",
        start: "top 60%",
        end: "top 30%",
        scrub: 2,
        markers: true,
        pin: true
    }
});
gsap.to("#page2 h1", {
   transform:"translateX(-150%)",
   duration:5,
   //jab pin use krenge to parent ko trigger krenge
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 0%",
        end:"top -100%",
        // Think of pulling a curtain — if you move your hand halfway, the curtain is halfway open. That’s scrub. If you pull and let go slowly, it follows your motion with smooth momentum — that’s scrub: 2.
        scrub: 2,//	Adds a 2-second smoothing delay between scroll and animation.
        markers: true,
        pin: true// It pins (freezes) the target section (#page2 here) in place during the animation.
    }
});
gsap.to("#page4 h2",{
    transform:"translateX(-200%)",
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 0%",
        end:"top -150%",
        scrub: 2,
        markers: true,
        pin: true
    }
})

//  1. git pull origin main --rebase
// Ye command:

// Pehle GitHub se naye commits laata hai

// Tumhare local commits temporarily hataata hai

// Pehle naye remote commits lagata hai

// Uske baad tumhare commits fir se "reapply" karta hai

// 📌 Resulting Git history (clean, linear):
// mathematica
// Copy
// Edit
// GitHub wali history:     A --- B
// Tumhari local commits:          \--- C --- D
// After rebase:           A --- B --- C' --- D'
// C’ aur D’ tumhare wahi commits hain, bas nayi history ke sath reapply kiye gaye hain