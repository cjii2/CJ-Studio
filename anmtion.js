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
        console.log("video scroll animation loaded");
        let video = document.getElementById("video");
        // video.pause();

        video.addEventListener("loadedmetadata", () => {
            gsap.to(video, {
                currentTime: video.duration,
                ease: "none",
                scrollTrigger: {
                    trigger: "#home-section",
                    start: "top top",
                    end: "bottom bottom",
                    markers: true,
                    scrub: true,
                }
            });
        });
    }

    scrollwithOutGsap(){
        let lastScroll = window.scrollY;
        const video = document.getElementById("video");

        video.pause();
        // video.playbackRate = 1;

        window.addEventListener("scroll", () => {

            const currentScroll = window.scrollY;
            // const direction = currentScroll ? "down" : "up";

            if (currentScroll > lastScroll) {
                // video.playbackRate = 1;
                video.play();
            } else {
                // video.playbackRate = -1;
                video.play();
            }

            lastScroll = currentScroll;

            clearTimeout(window.scrollTimeout);
            window.scrollTimeout = setTimeout(() => {
                video.pause();

            }, 120);
        });

    }
    activeApp(){
        // this.scroll();
        this.scrollwithOutGsap();
    }
}

const videoAnim = new videoAnimationScroll();
videoAnim.activeApp();