import TextAnimate from '../atoms/textAnimate'
import Arrow from '../icons/Arrow'
import { useEffect, useRef } from 'react'
import { useMenuStore } from '../../hooks/store/useMenuStore';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);


export default function MenuBtn({ ref }) {
    const tlRef = useRef()
    const firstLineRef = useRef()
    const secondLineRef = useRef()
    const { isMenuOpen, toggleMenu } = useMenuStore();

    useGSAP(() => {
        let tl = gsap.timeline({
            paused: true, defaults: {
                ease: 'elastic.inOut',
                duration: .4
            }
        })

        tl.to(firstLineRef.current, {
            rotate: '45deg',
            top: '50%'
        }).to(secondLineRef.current, {
            rotate: '-45deg',
            top: '50%'
        }, '<')

        tlRef.current = tl
    })

    const handleClick = () => {
        toggleMenu()
    }

    useEffect(() => {
        if (!tlRef.current) return

        if (isMenuOpen) {
            tlRef.current.play()
        } else {
            tlRef.current.reverse()
        }
    }, [isMenuOpen])


    return (
        <div className="fixed top-5 right-5 md:right-15 flex items-center gap-x-space-xs md:gap-x-space-md z-[999] scale-0"
            ref={ref}
        >
            <a href='mailto:hola@nesmanpro.com' className='py-5 px-8 bg-amber-100 rounded-full cursor-pointer duration-1000 ease-expo hover:scale-90'>
                <TextAnimate>
                    <span className='flex items-center gap-2'>
                        Let's Talk
                        <Arrow className='size-4 rotate-45' />
                    </span>
                </TextAnimate>
            </a>
            <button onClick={handleClick} className='p-5 bg-amber-200 rounded-full cursor-pointer duration-1000 ease-expo hover:scale-90  relative w-16 h-16 '>

                <span ref={firstLineRef} className="absolute translate-x-[-50%] translate-y-[-50%] top-[44%] left-[50%] w-7 h-0.5 bg-black" />
                <span ref={secondLineRef} className="absolute translate-x-[-50%] translate-y-[-50%] top-[56%] left-[50%]  w-7 h-0.5 bg-black" />
            </button>
        </div>
    )
}
