gsap.registerPlugin(ScrollTrigger);
class videoAnimationScroll {
    constructor() {
        this.tl = gsap.timeline();
        this.mm = gsap.matchMedia();
        this.breakPoint = 1000;
    }
    activeANM() {
        this.mm.add({
            isMobile: `(max-width:${this.breakPoint - 500}px)`,
            isDesktop: `(min-width:${this.breakPoint}px)`,
            isTablet: `(min-width: ${this.breakPoint - 499}px) and (max-width:${this.breakPoint - 1}px)`
        }, (context) => {
            const { isMobile, isDesktop ,isTablet} = context.conditions;

            if (isDesktop) this.desktop();
            if (isTablet) this.tablet();
            if (isMobile) this.mobile();
        });
    }


    desktop() {
        console.log('pc');
        const homeAn = gsap.utils.toArray(
            '.Home-elemnt-anmtion'
        );
        if(!homeAn.length) return;
        gsap.from(homeAn,{
            x:-40,
            autoAlpha:0,
            duration: 1,
            stagger: 0.2
        });

        const aboutAn = gsap.utils.toArray(
            '.about-me-anmtion'
        );
        if(aboutAn.length){
            gsap.from(aboutAn, {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: "#about-me",
                    start: "0% 95%",
                    end: '100% 45%',
                    scrub:true,
                    
                }
            });
        }

        const ex = gsap.utils.toArray(
            '#Exhibition-section .card , #Exhibition-section .Exhibition-anmtion'
        );
        if (ex.length){
            gsap.from(ex,{
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.4,
                scrollTrigger: {
                    trigger: "#Exhibition-section",
                    start: "0% 95%",
                    end: "50% 60%",
                    scrub:true,
                    
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
                stagger: 0.7,
                scrollTrigger: {
                    trigger: "#services-section",
                    start: "top 85%",
                    end: "100% 90%",
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

    tablet(){
        console.log('tablet');

        const homeAn = gsap.utils.toArray(
            '.Home-elemnt-anmtion'
        );
        if(!homeAn.length) return;
        gsap.from(homeAn,{
            x:-40,
            autoAlpha:0,
            duration: 1,
            stagger: 0.2
        });

        const aboutAn = gsap.utils.toArray(
            '.about-me-anmtion'
        );
        if(aboutAn.length){
            gsap.from(aboutAn, {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: "#about-me",
                    start: "0% 95%",
                    end: '100% 45%',
                    scrub:true,
                    
                }
            });
        }

        const ex = gsap.utils.toArray(
            '#Exhibition-section .card , #Exhibition-section .Exhibition-anmtion'
        );
        if (ex.length){
            gsap.from(ex,{
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.4,
                scrollTrigger: {
                    trigger: "#Exhibition-section",
                    start: "0% 95%",
                    end: "bottom 90%",
                    scrub:true,
                    
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
                stagger: 0.7,
                scrollTrigger: {
                    trigger: "#services-section",
                    start: "top 85%",
                    end: "100% 75%",
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
                    start: "top 95%",
                    end: "100% 96%",
                    scrub:true,
                    invalidateOnRefresh:true,
                    
                }
            });
        }
    }
    mobile() {
        console.log('mobile');
        const aboutAn = gsap.utils.toArray(
            '.about-me-anmtion'
        );
        this.tl.from('#openSideBar', {
            x: -50,
            opacity: 0,
            duration: 1,
            stagger: 0.2
        })

        
        .from(aboutAn, {
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#about-me",
                start: "0% 95%",
                end: "bottom 70%",
                scrub: true,
            }
        })

        .from(`#Exhibition-section .card , #Exhibition-section .Exhibition-anmtion`,{
            y:60,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#Exhibition-section",
                start: "0% 95%",
                end: "100% 90%",
                scrub:true,
                
            }
        })

        .from(`#services-section .card , #services-section .servers-anmtion`,{
            y: 60,
            opacity: 0,
            duration: 1.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#services-section",
                start: "top 95%",
                end: "100% 85%",
                scrub:true,
                invalidateOnRefresh:true,
                // markers:true
            }
        })
        
        .from(`#contect-me-section section , #contect-me-section h1, #contect-me-section p`,{
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
