class videoAnimationScroll {
    constructor() {
        gsap.registerPlugin(ScrollTrigger);
        this.tl = gsap.timeline();
        this.mm = gsap.matchMedia();
        // this.headerElemnt = document.querySelectorAll('.header-elemnt-anmtion');
        this.HomeElemnt = document.querySelectorAll('.Home-elemnt-anmtion');
    }
    activeANM(){
        this.mm.add({
            isMobile:"(max-width:500px)",
            isDesktop:"(min-width: 501px)"
        },(context) =>{
            let {isMobile , isDesktop} = context.conditions;

            if(isDesktop){
                this.desktop();
                return
            }

            if(isMobile){
                this.mobile();
                return
            }

        }
    )
    }

    desktop() {
        addEventListener('DOMContentLoaded',()=>{
            this.tl.from(this.HomeElemnt,{
                x:-40,
                opacity:0,
                duration: 1,
                stagger: 0.2
            })
        })
    }

    mobile(){
        return (
            this.tl.from(this.headerElemnt,{
                x:-10,
                opacity:0,
                duration: 0.6,
                stagger: 0.2
            })
        )
    }

    activeApp() {
        this.activeANM();
        // this.scrollwithOutGsap();
    }
}

const videoAnim = new videoAnimationScroll();
videoAnim.activeApp();
