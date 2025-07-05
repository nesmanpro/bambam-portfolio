import { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { twMerge } from 'tailwind-merge';

gsap.registerPlugin(useGSAP);


export default function TextAnimate({ children, className }) {
    const containerRef = useRef();
    const outRef = useRef();
    const inRef = useRef();
    const tlRef = useRef();

    useGSAP(() => {

        let tl = gsap.timeline({
            defaults: {
                duration: .3,
                ease: 'back.inOut'
            },
            paused: true
        });


        tl.set(inRef.current, {
            y: 100
        }).to(inRef.current, {
            y: 0
        }).set(outRef.current, {
            y: 0
        }, '+=<').to(outRef.current, {
            y: -100
        }, '+=<')


        tlRef.current = tl
    }, { scope: containerRef.current })

    const handleEnter = () => {
        tlRef.current.play()
    }
    const handleLeave = () => {
        tlRef.current.reverse()
    }



    return (
        <div
            ref={containerRef}
            className={twMerge("relative inline-flex overflow-hidden cursor-pointer", className)}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onTouchStart={handleEnter}
            onTouchEnd={handleLeave}
        >
            <span

                ref={outRef}
            >
                {children}
            </span>
            <span
                ref={inRef}
                className="absolute inset-0 opacity-60 translate-y-full capitalize"
            >
                {children}
            </span>
        </div>
    )
}
