class videoAnimationScroll {
    constructor() {
        gsap.registerPlugin(ScrollTrigger);
        this.tl = gsap.timeline();
        this.mm = gsap.matchMedia();
        this.aboutme = document.querySelectorAll('.about-me-anmtion');
        this.HomeElemnt = document.querySelectorAll('.Home-elemnt-anmtion');
    }
    activeANM(){
        this.mm.add({
            isMobile:"(max-width:500px)",
            isDesktop:"(min-width: 501px)"
        },(context) =>{
            let {isMobile , isDesktop} = context.conditions;

            if(isDesktop) this.desktop();
            if(isMobile) this.mobile();

        });
    }

    desktop() {
        if (!this.aboutme || this.aboutme.length === 0) return;
        if (!this.HomeElemnt || this.HomeElemnt.length === 0) return;
        this.tl.from(this.HomeElemnt,{
            x:-40,
            opacity:0,
            duration: 1,
            stagger: 0.2
        })

        gsap.from(this.aboutme, {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#about-me",
                start: "0% 95%",
            }
        });

    }

    mobile() {
        if (!this.aboutme || this.aboutme.length === 0) return;
        if (!this.HomeElemnt || this.HomeElemnt.length === 0) return;
        this.tl.from(this.headerElemnt, {
            x: -40,
            opacity: 0,
            duration: 1,
            stagger: 0.2
        });

        gsap.from(this.aboutme, {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#about-me",
                start: "0% 95%",
                end: "bottom bottom",
                scrub: true,
            }
        });
    }

    activeApp() {
        this.activeANM();
    }
}

const videoAnim = new videoAnimationScroll();
videoAnim.activeApp();
