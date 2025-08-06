import { useGSAP } from "@gsap/react"
import { useRef, useState } from "react"
import ScrollTrigger from "gsap/ScrollTrigger"
import gsap from "gsap"
import SectionLayout from "../components/molecules/SectionLayout"
import { CustomCursor } from "../components/molecules/CustomCursor"
import useMousePosition from "../hooks/animations/useMousePosition"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const worksItems = [
    {
        id: '1',
        title: 'Cycling Class',
        subtitle: 'React, Vite, Tailwind',
        categories: ['UI-UX', 'Development'],
        year: '2023',
        imgUrl: '/img/img-0.webp',
        bgImg: '/assets/14.jpg',
        url: 'https://ecommerce-roque.vercel.app/',
        textCursor: 'View Live!'
    },
    {
        id: '2',
        title: "BAMBAM Talks",
        subtitle: 'Vanilla JS, GSAP, SASS',
        categories: ['UI-UX', 'Developing'],
        year: '2024',
        imgUrl: '/img/img-4.webp',
        bgImg: '/assets/14.jpg',
        url: 'https://js-vanilla-scroll-transitions.vercel.app/',
        textCursor: 'View Live!'
    },
    {
        id: '3',
        title: "Dev Portfolio",
        subtitle: 'NextJS, Typescript, Tailwind, Framer Motion',
        categories: ['UI-UX', 'Developing'],
        year: '2025',
        imgUrl: '/img/img-5.webp',
        bgImg: '/assets/14.jpg',
        url: 'https://github.com/nesmanpro/dev_Portfolio',
        textCursor: 'View GitHub!'
    },
    {
        id: '4',
        title: "Nae Riviera Maya",
        subtitle: 'React, Vite, Tailwind',
        categories: ['UI-UX', 'Developing'],
        year: '2023',
        imgUrl: '/img/img-6.webp',
        bgImg: '/assets/14.jpg',
        url: 'https://www.naerivieramaya.com/',
        textCursor: 'View Live!'
    },
    {
        id: '5',
        title: "Coffee Ecommerce",
        subtitle: 'NextJS, Typescript, Tailwind, Zustand',
        categories: ['UI-UX', 'Developing'],
        year: '2025',
        imgUrl: '/img/img-8.webp',
        bgImg: '/assets/14.jpg',
        url: 'https://github.com/nesmanpro/coffeeFront',
        textCursor: 'View GitHub!'
    },
    {
        id: '6',
        title: 'Ecommerce Filters',
        subtitle: 'Vanilla JS, CSS, HTML',
        categories: ['Testing', 'Development'],
        year: '2025',
        imgUrl: '/img/img-2.webp',
        bgImg: '/assets/15.jpg',
        url: 'https://github.com/nesmanpro/avoris-ptech-waveless',
        textCursor: 'View GitHub!'
    },
    {
        id: '10',
        title: 'Smooth Loading',
        subtitle: 'React, Vite, SASS, Framer Motion',
        categories: ['Testing', 'Development'],
        year: '2024',
        imgUrl: '/img/img-9.webp',
        bgImg: '/assets/15.jpg',
        url: 'https://github.com/nesmanpro/smooth_loading',
        textCursor: 'View GitHub!'
    },
    {
        id: '7',
        title: 'Web Intro Animated ',
        subtitle: 'NextJS, GSAP, Tailwind',
        categories: ['UI-UX', 'Development'],
        year: '2025',
        imgUrl: '/img/img-1.webp',
        bgImg: '/assets/14.jpg',
        url: 'https://github.com/nesmanpro/gsap-react_intro_animation',
        textCursor: 'View GitHub!'
    },
    {
        id: '8',
        title: 'NoName Club Intro',
        subtitle: 'React, GSAP, NextJS',
        categories: ['UI-UX', 'Development'],
        year: '2024',
        imgUrl: '/img/img-7.webp',
        bgImg: '/assets/14.jpg',
        url: 'https://js-vanilla-gsap-animations.vercel.app/',
        textCursor: 'View Live!'
    },
    {
        id: '9',
        title: 'Menu Animation',
        subtitle: 'Vanilla JS, Vite, GSAP',
        categories: ['UI-UX', 'Developing'],
        year: '2024',
        imgUrl: '/img/img-3.webp',
        bgImg: '/assets/12.jpg',
        url: 'https://github.com/nesmanpro/vite-gsap-responsive-menu',
        textCursor: 'View GitHub!'
    },
]

export default function Works() {
    const { x, y } = useMousePosition()
    const contRef = useRef(null)
    const numbersRef = useRef(null)

    const [cursorVisible, setCursorVisible] = useState(false);
    const [cursorText, setCursorText] = useState('');

    const handleMouseEnter = (text) => {
        setCursorVisible(true)
        setCursorText(text)
    }
    const handleMouseLeave = () => {
        setCursorVisible(false)
        setCursorText('')
    }


    useGSAP(() => {
        const containers = gsap.utils.toArray('[data-container-index]')
        const total = worksItems.length;

        containers.forEach((container, index) => {
            const percent = -(100 / total) * index

            ScrollTrigger.create({
                trigger: container,
                start: "top center",
                end: "bottom center",
                onEnter: () => {
                    gsap.to(numbersRef.current, {
                        yPercent: percent,
                        ease: "power2.out",
                        duration: 0.5,
                    })
                },
                onEnterBack: () => {
                    gsap.to(numbersRef.current, {
                        yPercent: percent,
                        ease: "power2.out",
                        duration: 0.5,
                    })
                },
            })
        })

    }, { scope: contRef })



    return (

        <SectionLayout
            id='work'
            title='Selected Works /'
            extra={`(${worksItems.length})`}
            subtitle='(projects)'
            description="Featured projects that have been meticulously crafted with passion to drive results and impact."
        >

            <div ref={contRef} className="grid grid-cols-12 pt-space-lg gap-space-md h-full">
                <div className="sticky top-12 col-span-5 hidden h-fit w-full overflow-hidden text-[22vw] font-normal leading-[0.8] md:flex">
                    <span className="relative">0</span>
                    <span className="relative">
                        <div ref={numbersRef} className="absolute left-0 flex flex-col">
                            {worksItems.map((work, idx) => (
                                <span key={work.id} data-number-index={idx} className={`left-0`}>{idx + 1}.</span>
                            ))}
                        </div>
                    </span>
                </div>
                <aside className="col-span-12 flex flex-col gap-y-space-xl  md:col-span-7 md:gap-y-space-2xl">

                    {worksItems.map((work, index) => (
                        <div
                            key={work.id}
                            data-container-index={index}
                            className="@container"
                        >
                            <a
                                href={work.url}
                                target="_blank"
                                onMouseEnter={() => handleMouseEnter(work.textCursor)}
                                onMouseLeave={handleMouseLeave}
                                className="flex aspect-square items-center justify-center overflow-clip rounded-md p-space-md md:p-space-lg xl:p-space-2xl cursor-none relative">
                                <img loading="lazy" className="absolute w-full h-full object-cover object-top" src={work.bgImg} alt={work.title} />
                                <div className="w-full overflow-clip z-0 aspect-[4/3] rounded-md">
                                    <img loading="lazy" className="w-full h-full object-cover object-top" src={work.imgUrl} alt={work.title} />
                                </div>

                            </a>
                            <div className="flex flex-col justify-between gap-y-space-sm pt-space-xs @lg:flex-row">
                                <div className="flex flex-col gap-y-space-3xs">
                                    <span className="font-mono text-sm text-gray-950/50">{work.subtitle}</span>
                                    <h3 className="w-fit text-heading-3 font-semibold text-gray-800 leading-tight">{work.title}</h3>
                                </div>
                                <div className="flex items-end gap-space-3xs tracking-tight pb-2">
                                    {work.categories.map(cat => (

                                        <span key={cat} className="py-1 px-3 border-1 border-gray-800 text-gray-800 rounded-3xl text-mono uppercase">{cat}</span>
                                    ))}

                                    <span className="py-1 px-3 border-1 border-gray-800 bg-gray-800 text-yellow-300 rounded-3xl text-mono uppercase">{work.year}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </aside>
            </div>

            <CustomCursor text={cursorText} x={x} y={y} visible={cursorVisible} />
        </SectionLayout>

    )
}
