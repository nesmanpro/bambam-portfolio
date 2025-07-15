import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useHeroScrollAnimation = ({ heroRef, menuBtnRef, sectionRef, containerRef }) => {

    useGSAP(() => {
        if (!heroRef.current || !menuBtnRef.current || !sectionRef.current) return;

        let tl = gsap.timeline({ paused: true })

        const html = document.documentElement;

        gsap.to(heroRef.current, {
            scale: 0.9,
            ease: 'none',
            opacity: 0,
            y: 100,
            onStart: () => {
                html.style.scrollBehavior = 'auto';
            },
            onComplete: () => {
                html.style.scrollBehavior = 'smooth';
            },
            onRefresh: () => {
                html.style.scrollBehavior = 'auto';
                setTimeout(() => {
                    html.style.scrollBehavior = 'smooth';
                }, 50);
            },
            scrollTrigger: {
                trigger: heroRef.current,
                start: 'top top',
                end: '70%',
                scrub: true,

            }
        })

        tl.fromTo(menuBtnRef.current,
            {
                display: 'none',
                ease: 'bounce.in',
                scale: 0,
                opacity: 0,
            },
            {
                scale: 1,
                display: 'flex',
                ease: 'elastic.inOut',
                duration: 1.9,
                opacity: 1,
            })

        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top top',
            onEnter: () => {
                tl.play()
            },
            onLeaveBack: () => {
                tl.reverse()
            }
        })

    }, { scope: containerRef.current })
}


export const useInitialLoading = ({ containerRef, preloaderRef, navRef }) => {
    useGSAP(() => {
        if (!preloaderRef.current) return

        const tl = gsap.timeline({
            defaults: {
                ease: 'power2.inOut'
            }
        })

        tl.to(preloaderRef.current, {
            y: '-100%',
            borderRadius: '10% 10% 99% 99% / 10% 10% 99% 99%',
            duration: 0.8
        }).add(() => {
            preloaderRef.current.style.display = 'none'
        }).from(navRef.current, {
            duration: .5,
            y: '-100%',
        }, '0.3')


    }, { scope: containerRef.current })

}