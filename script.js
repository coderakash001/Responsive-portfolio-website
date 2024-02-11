gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



var tl = gsap.timeline()

tl.from("#main nav #nav-1, #main nav #nav-2 a, #main nav #nav-3",{
    y: -40,
    duration:.8,
    opacity: 0,
    stagger: .3
})

tl.from("#main #page-1 h4",{
    y: -20,
    duration:.5,
    opacity: 0,
    stagger: .3
})

tl.from("#main #page-1 h1",{
    y: -30,
    duration:.8,
    opacity: 0,
    stagger: .4
})

tl.from("#main #page-1 p",{
    y: -20,
    duration:.5,
    opacity: 0,
    stagger: .2
})

tl.from("#main #page-1 #right .circle",{
    scale:.5,
    duration:.8,
    opacity: 0,
})

tl.from("#main #page-1 #right .circle img",{
    scale: 1.2,
    duration:1,
    opacity: 0,
})


gsap.from("#main #page-2 h1",{
    x: 100,
    opacity:0,
    scrollTrigger:{ 
        trigger: "#main #page-2",
        scroller: "#main",
        scrub: 2,
        start: "top 60%",
        end: "top 20%",
        // markers: true
}
})

gsap.from("#main #page-2 p, #main #page-2 .bar ",{
    x: -100,
    opacity: 0,
    scrollTrigger:{
        trigger: "#main #page-2",
        scroller: "#main",
        scrub:2,
        start: "top 60%",
        end: "top 20%",
        // markers: true
    } 
})

gsap.from("#main #page-2 h3",{
    x: -100,
    opacity:0,
    scrollTrigger:{ 
        trigger: "#main #page-2",
        scroller: "#main",
        scrub: 2,
        start: "top 30%",
        end: "top 20%",
        // markers: true
}
})
gsap.from("#main #page-2 .box",{
    opacity:0,
    duration: .5,
    scrollTrigger:{ 
        trigger: "#main #page-2",
        scroller: "#main",
        scrub: 2,
        start: "top 20%",
        end: "top 20%",
        // markers: true
}
})

gsap.from("#main #page-3 h1",{
    x: -100,
    opacity: 0,
    scrollTrigger:{
        trigger: "#main #page-3",
        scroller: "#main",
        scrub:2,
        start: "top 70%",
        end: "top 30%",
        // markers: true
    } 
})

tl.from("#main #page-3 h3, #main #page-3 img ",{
    y: -30,
    duration:1,
    opacity: 0,
    stagger: .4,
    scrollTrigger:{
        trigger: "#main #page-3",
        scroller: "#main",
        scrub:2,
        start: "top 60%",
        end: "top 5%",
        // markers: true
    } 
})

gsap.from("#main #page-4 h1",{
    x: -100,
    opacity: 0,
    scrollTrigger:{
        trigger: "#main #page-4",
        scroller: "#main",
        scrub:2,
        start: "top 70%",
        end: "top 30%",
        // markers: true
    } 
})

tl.from("#main #page-4 .box, #main #page-4 .title, #main #page-4 .tit, #main #page-4 h3, #main #page-4 button",{
    y: -80,
    duration:1,
    opacity: 0,
    stagger: .4,
    scrollTrigger:{
        trigger: "#main #page-4",
        scroller: "#main",
        scrub:2,
        start: "top 60%",
        end: "top 5%",
        // markers: true
    } 
})
tl.from("#main #page-4 h3, #main #page-4 button",{
    y: -20,
    duration:1,
    opacity: 0,
    stagger: .4,
    scrollTrigger:{
        trigger: "#main #page-4",
        scroller: "#main",
        scrub:2,
        start: "top 70%",
        end: "top 5%",
        // markers: true
    } 
})

gsap.from("#main #page-5 h1",{
    y: -60,
    opacity: 0,
    scrollTrigger:{
        trigger: "#main #page-5",
        scroller: "#main",
        scrub:2,
        start: "top 70%",
        end: "top 30%",
        // markers: true
    } 
})

gsap.from("#main #page-5 p",{
    opacity: 0,
    scrollTrigger:{
        trigger: "#main #page-5",
        scroller: "#main",
        scrub:2,
        start: "top 60%",
        end: "top 30%",
        // markers: true
    } 
})

gsap.from("#main #page-5 button",{
    scale: 0,
    opacity: 0,
    scrollTrigger:{
        trigger: "#main #page-5",
        scroller: "#main",
        scrub:2,
        start: "top 60%",
        end: "top 30%",
        // markers: true
    } 
})




var menu = document.querySelector("nav #nav-3 i")

var close = document.querySelector("#full i")

var tl = gsap.timeline()

tl.to("#full", {
    right: "0%",
})

tl.from("#full div", {
    left: "180%",
    duration: .6,
    stagger: .3
})

tl.paused(true);

menu.addEventListener("click", function(){
    tl.paused(false);  
})

close.addEventListener("click", function(){
    tl.reverse();
})
