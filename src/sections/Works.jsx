import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import ScrollTrigger from "gsap/ScrollTrigger"
import gsap from "gsap"
import SectionLayout from "../components/molecules/SectionLayout"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const worksItems = [
    {
        title: 'Entuitive Engineering',
        subtitle: 'Technology & Arts',
        categories: ['Design', 'Development'],
        year: '2024',
        imgUrl: '/assets/10.jpg',
        bgImg: '/assets/11.jpg'
    },
    {
        title: 'SOGAI',
        subtitle: 'Architecture & Engineering',
        categories: ['Design', 'Development'],
        year: '2025',
        imgUrl: '/assets/13.jpg',
        bgImg: '/assets/11.jpg'
    },
    {
        title: 'BlueBrown Partners',
        subtitle: 'Venture Capital',
        categories: ['Design', 'branding'],
        year: '2024',
        imgUrl: '/assets/3.jpg',
        bgImg: '/assets/10.jpg'
    },
    {
        title: "let's or not",
        subtitle: 'Artist Atelier',
        categories: ['photography', 'branding'],
        year: '2025',
        imgUrl: '/assets/2.jpg',
        bgImg: '/assets/15.jpg'
    },
]

export default function Works() {
    const contRef = useRef(null)
    const numbersRef = useRef(null)

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
                                <span key={work.title} data-number-index={idx} className={`left-0`}>{idx + 1}.</span>
                            ))}
                        </div>
                    </span>
                </div>
                <aside className="col-span-12 flex flex-col gap-y-space-xl  md:col-span-7 md:gap-y-space-2xl">
                    {worksItems.map((work, index) => (
                        <div key={work.title} data-container-index={index} className="@container">
                            <div className="relative flex aspect-square items-center justify-center overflow-clip rounded-md p-space-md md:p-space-lg xl:p-space-2xl">

                                <img loading="lazy" className="absolute w-full h-full object-cover object-top" src={work.bgImg} alt={work.title} />
                                <div className="w-full overflow-clip z-0 aspect-[4/3] rounded-md">
                                    <img loading="lazy" className="w-full h-full object-cover object-top" src={work.imgUrl} alt={work.title} />
                                </div>
                            </div>
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
        </SectionLayout>

    )
}
