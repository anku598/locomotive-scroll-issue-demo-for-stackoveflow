import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';
gsap.registerPlugin(ScrollTrigger)

const scrollContainer = document.querySelector('[data-scroll-container]')

const bodyScrollBar = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
    initPosition: { x: 0, y: 0 },
    lerp: 0.12,
    getSpeed: true,
    getDirection: true,
    offset:["15%",0],
    tablet: {
        smooth: true,
        direction: 'vertical',
        gestureDirection: 'vertical',
        breakpoint: 1024
    },
    smartphone: {
        smooth: true,
        direction: 'vertical',
        gestureDirection: 'vertical'
    }
})

bodyScrollBar.on('scroll', ScrollTrigger.update)

  ScrollTrigger.scrollerProxy('.scroller-wrapper', {
                scrollTop(value) {
                    if(arguments.length) {
                        
                        return arguments.length ?
                        bodyScrollBar.scrollTo(value, 0, 0)  :
                        bodyScrollBar.scroll.instance.scroll.y
                        // return bodyScrollBar.scrollTop = value
                    }
                },
                getBoundingClientRect() {
                    return {
                        left: 0, top: 0,
                        width: window.innerWidth,
                        height: window.innerHeight
                    }
                },
               
                pinType:  scrollContainer.style.transform ? "transform" : "fixed"
            })

ScrollTrigger.addEventListener('refresh', () => bodyScrollBar.update())
ScrollTrigger.addEventListener('resize', () => bodyScrollBar.update())


ScrollTrigger.refresh(true)




