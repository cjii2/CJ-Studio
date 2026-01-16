import { gsap } from "gsap";
    
// import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

class videoAnimationScroll {
    constructor(){
        gsap.registerPlugin(ScrollTrigger);
        this.tl = gsap.timeline();
        this.mm = gsap.matchMedia();
    }

    scroll(){
        let video = document.getElementById("video");
        video.pause();

        ScrollTrigger.create({
            trigger: video,
            start: "top 80%",
            end: "bottom 20%",
            // scrub: true,
            onEnter: () => video.play(),
            onLeave: () => video.pause(),
            onEnterBack: () => video.play(),
            onLeaveBack: () => {
                video.pause();
            }
        });
    }
    activeApp(){
        this.scroll();
    }
}

const videoAnim = new videoAnimationScroll();
videoAnim.activeApp();