import { gsap } from "gsap";
// import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

class videoAnimationScroll {
    constructor() {
        gsap.registerPlugin(ScrollTrigger);
        this.tl = null;
        this.mm = gsap.matchMedia();
        // this.video = document.querySelector("#video");
        // this.container = document.querySelector("#home-section");
    }

    scroll() {

    }

    activeApp() {
        this.scroll();
        // this.scrollwithOutGsap();
    }
}

const videoAnim = new videoAnimationScroll();
videoAnim.activeApp();
