
import { twMerge } from 'tailwind-merge'
import TextAnimate from '../atoms/textAnimate'
import { useMenuStore } from '../../hooks/store/useMenuStore';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from 'react';
import { CustomEase } from "gsap/CustomEase";


gsap.registerPlugin(useGSAP, CustomEase);
CustomEase.create('hop', '.8, 0, .3, 1');


const socialLinks = [
    {
        url: 'https://www.instagram.com/nesmanpro/',
        label: 'instagram'
    },
    {
        url: 'https://www.linkedin.com/in/lucasroquecugiani/',
        label: 'linkedin'
    },
    {
        url: 'https://github.com/nesmanpro',
        label: 'github'
    },
];

const navItems = [
    {
        url: '#home',
        label: 'home'
    },
    {
        url: '#service',
        label: 'service'
    },
    {
        url: '#work',
        label: 'work'
    },
    {
        url: '#about',
        label: 'about'
    },
    {
        url: '#contact',
        label: 'contact'
    },
]


export default function SideMenu({ className }) {
    const containerRef = useRef();
    const menuRef = useRef();
    const overlayRef = useRef();
    const tlRef = useRef();

    const { isMenuOpen, closeMenu } = useMenuStore();

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: {
                ease: 'hop',
                duration: .4
            },
            paused: true
        })


        gsap.set(containerRef.current, {
            pointerEvents: 'none',
        })
        gsap.set(overlayRef.current, {
            display: 'hidden',
            opacity: 0,
        })
        gsap.set(menuRef.current, {
            xPercent: 101
        })

        tl.to(containerRef.current, {
            pointerEvents: 'auto',
        }).to(overlayRef.current, {
            display: 'flex',
            opacity: 1
        }, '<').to(menuRef.current, {
            xPercent: 0
        })

        tlRef.current = tl;
    }, {})

    useEffect(() => {
        if (!tlRef.current) return;

        if (isMenuOpen) {
            tlRef.current.play()
        } else {
            tlRef.current.reverse()
        }

    }, [isMenuOpen])



    return (
        <div
            ref={containerRef}
            onClick={() => closeMenu()}
            className={twMerge(`fixed z-40 top-0 left-0 h-screen w-screen cursor-pointer`, className)}>
            <div
                ref={overlayRef}
                className='pointer-events-none fixed z-50 hidden w-screen h-screen justify-end bg-gray-900/40'>
                <div
                    ref={menuRef}
                    className='pointer-events-auto z-20 flex max-w-2xl flex-col justify-end overflow-hidden rounded-md bg-gray-950 xl:max-w-3xl 3xl:max-w-4xl'>

                    <nav className='h-full px-space-md text-menu font-bold uppercase leading-tight sm:px-space-xl flex flex-col justify-center '>
                        <ul className='flex flex-col gap-y-space-3xs'>

                            {navItems.map((item) => (
                                <li key={item.label} onClick={() => closeMenu()} className='group relative flex w-fit items-center text-yellow-100 cursor-pointer'>
                                    <span className='invisible absolute inline-block h-3 w-0 bg-yellow-100 opacity-0 transition-all duration-700 ease-in-out group-hover:visible group-hover:w-7 group-hover:opacity-100'></span>
                                    <a className='inline-block transition-transform duration-700 ease-in-out group-hover:translate-x-10' href={item.url}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className='flex flex-col items-start justify-start gap-y-space-md px-space-md sm:px-space-xl sm:pb-space-xl text-yellow-100'>
                        <div className='flex flex-col'>
                            <span className='text-left text-base-small font-bold uppercase 2xl:text-base'>Email Adress</span>
                            <a href="mailto:hola@nesmanpro.com">
                                <TextAnimate>
                                    <span className='font-mono font-medium text-yellow-50'>
                                        hola@nesmanpro.com
                                    </span>
                                </TextAnimate>
                            </a>
                        </div>
                        <ul className='flex flex-nowrap justify-start gap-x-space-2xs'>
                            {socialLinks.map((link) => (

                                <li key={link.label}
                                    onClick={() => closeMenu()}>
                                    <a
                                        className='flex h-fit w-fit items-center justify-center rounded-full border-1 border-yellow-100 py-1.5 px-4'
                                        target='_blank'
                                        href={link.url}
                                    >
                                        <TextAnimate>
                                            <span className='font-mono font-medium text-yellow-50 uppercase'>{link.label}
                                            </span>
                                        </TextAnimate>
                                    </a>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
