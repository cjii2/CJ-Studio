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
            isMobile:"(max-width:700px)",
            isDesktop:"(min-width: 701px)"
        },(context) =>{
            let {isMobile , isDesktop} = context.conditions;

            if(isDesktop) this.desktop();
            if(isMobile) this.mobile();

        });
        history.scrollRestoration = "manual";
        window.addEventListener("load", () => {
            window.scrollTo(0, 0);
            ScrollTrigger.refresh();
        });

    }

    desktop() {
        if (!this.aboutme || this.aboutme.length === 0) return;
        if (!this.HomeElemnt || this.HomeElemnt.length === 0) return;
        gsap.from(this.HomeElemnt,{
            x:-40,
            autoAlpha:0,
            duration: 1,
            invalidateOnRefresh: true,
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
                end: '100% 40%',
                scrub:true,
            }
        });

        const ex = gsap.utils.toArray(
            '#Exhibition-section .card , #Exhibition-section .Exhibition-anmtion'
        );
        if (ex.length){
            gsap.from(ex,{
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: "#Exhibition-section",
                    start: "0% 95%",
                    end: "50% 60%",
                    scrub:true,
                    // markers:true
                }
            });
        }

        const ser = gsap.utils.toArray(
            `#services-section .card , #services-section .servers-anmtion`
        );
        if(ser.length){
            gsap.from(ser,{
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.5,
                scrollTrigger: {
                    trigger: "#services-section",
                    start: "top 90%",
                    end: "100% 91%",
                    scrub:true,
                    invalidateOnRefresh:true,
                }
            });
        }
        
        const con = gsap.utils.toArray(
            `#contect-me-section section , #contect-me-section h1, #contect-me-section p`
        );
        if(con.length){
            gsap.from(con,{
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: "#contect-me-section",
                    start: "0% 95%",
                    end: "100% 96%",
                    scrub:true,
                    // invalidateOnRefresh:true
                }
            });
        }
    }

    mobile() {
        if (!this.aboutme || this.aboutme.length === 0) return;
        if (!this.HomeElemnt || this.HomeElemnt.length === 0) return;
        this.tl.from('#openSideBar', {
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

        gsap.from(`#Exhibition-section .card , #Exhibition-section h1, #Exhibition-section p`,{
            y:"40px",
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#Exhibition-section",
                start: "0% 95%",
                end: "100% 80%",
                scrub:true,
            }
        });

        gsap.from(`#services-section .card , #services-section .servers-anmtion`,{
            // y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: "#services-section",
                start: "top 95%",
                end: "100% 96%",
                scrub:true,
                // toggleActions:'play none none none',
                invalidateOnRefresh:true,
                // markers:true
            }
        });
        
        gsap.from(`#contect-me-section section , #contect-me-section h1, #contect-me-section p`,{
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#contect-me-section",
                start: "0% 95%",
                end: "100% 96%",
                scrub:true,
            }
        });
    }

    activeApp() {
        this.activeANM();
    }
}

const videoAnim = new videoAnimationScroll();
videoAnim.activeApp();
