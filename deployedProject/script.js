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
            left:dets.x-30,
            top:dets.y-30
        })

    });
}
videoAnimation()

gsap.from('#page1 h1',{
    
})