const tl=gsap.timeline({defaults:{ease: "power1.out"}});;
tl.to(".intro-logo",{y:"0%", duration:1});
tl.to(".slider", {y:"-100%", duration:1.5, delay:0.1});
tl.to(".intro",{y:"-100%",duration:1},"-=1" );

const links=document.querySelectorAll('.side_links')
function openSlideMenu(){
    document.getElementById('side-menu').style.width ='200px';
    for(const link of links){
        link.style.display ='block';
    }
}

function closeSlideMenu(){
    for(const link of links){
        link.style.display ='none';
    }
    document.getElementById('side-menu').style.width ='0px';
}

for(const link of links){
    link.addEventListener('click',()=>{
        closeSlideMenu();
    })
}
TweenMax.from(".logo", 1, {
    delay:2.1,
    opacity: 0,
    x: -300,
    ease: Expo.easeInOut
})
TweenMax.from(".nav_links", 1, {
    delay: 2.15,
    opacity: 0,
    x: 300,
    ease: Expo.easeInOut
})
TweenMax.from(".hero-content", 1, {
    delay: 2.3,
    opacity: 0,
    y: -200,
    ease: Expo.easeInOut
})
TweenMax.from(".illustration", 1, {
    delay: 2.5,
    opacity: 0,
    y: -200,
    ease: Expo.easeInOut
})

setTimeout(()=> {
    AOS.init();
 }
 ,2000);


