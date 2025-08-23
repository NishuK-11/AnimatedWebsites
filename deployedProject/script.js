const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoAnimation(){
    const play = document.getElementById('play');
    const videoContainer = document.getElementById('video-container');

    videoContainer.addEventListener('mouseenter', (e) => {
    //    play.style.opacity = 1;
    //    play.style.scale = 1;
        gsap.to(play,{
            scale:1,
            opacity:1,

        })
    });
    videoContainer.addEventListener('mouseleave', (e) => {
        gsap.to(play,{
            scale:0,
            opacity:0
        })
    });
    videoContainer.addEventListener('mousemove', function(dets) {
        gsap.to(play,{
            left:dets.x-10,
            top:dets.y-70
        })

    });
}
videoAnimation()

function loadingAnimation(){
    gsap.from('#page1 h1',{
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.9,
    stagger:0.2
    })
    gsap.from('#page1 #video-container',{
    scale:0.9,
    opacity:0,
    delay:1.3,
    duration:0.3,
    stagger:0.2
    })
}
loadingAnimation();

document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
    })
})

document.querySelector("#child1").addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        transform:'translate(-50%,-50%) scale(1)'
    })
})
document.querySelector("#child1").addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        transform:'translate(-50%,-50%) scale(0)'
    })
})