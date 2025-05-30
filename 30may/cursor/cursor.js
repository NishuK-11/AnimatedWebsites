var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");
// window.addEventListener("keypress",function(dets){
//     console.log(dets);
// })
main.addEventListener("mousemove",function(dets){   
    // console.log(dets.clientX,dets.clientY);
    gsap.to(cursor,{
        x:dets.clientX,
        y:dets.clientY,
        duration:0.6,
        ease: "back.out",
    })
})

imageDiv.addEventListener("mouseenter",function(dets){
    cursor.innerHTML = "View More"
    gsap.to(cursor,{
        scale: 4,
        duration: 0.5,
        ease: "back.out",
        backgroundColor: "#ffffff8a"
    })
})
imageDiv.addEventListener("mouseleave",function(dets){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale: 1,
        backgroundColor:"#fff"
    })
})
