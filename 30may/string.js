var path = "M 10 100 Q 500 100 990 100"

var finalPath = "M 10 100 Q 500 100 990 100"
var string = document.querySelector("#string");

// string.addEventListener("mouseenter",function(dets){
//     console.log("hovered");
//     console.log(dets);
// })
string.addEventListener("mousemove",function(dets){
    path = `M 10 100 Q ${dets.clientX} ${dets.clientY} 990 100`
    gsap.to("svg path",{
        attr:{
            d:path
        },
        duration:0.2,
        ease:"power3.out"
    })
})
string.addEventListener("mouseleave",function(dets){
    gsap.to("svg path",{
        attr:{
            d:finalPath
        },
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})
