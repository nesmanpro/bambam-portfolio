import imgProfile from '/profilepic.jpg';
import TextAnimate from '../components/atoms/textAnimate';
import Arrow from '../components/icons/Arrow';
import { HeroImg } from '../components/icons/heroImg';
import { CustomEase } from "gsap/CustomEase";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { splitTextElements } from '../animations/SplitText';


gsap.registerPlugin(useGSAP, CustomEase);
CustomEase.create('hop', '.8, 0, .3, 1');


export default function Hero({ ...props }) {
    const contRef = useRef()
    const svgRef = useRef()
    const txtRef = useRef()
    const arrowRef = useRef()
    const btnRef = useRef()
    const imgRef = useRef()

    useGSAP(() => {

        const tl = gsap.timeline({
            defaults: {
                ease: 'hop'
            }
        })
        const paths = gsap.utils.toArray('.hero-svg path')

        splitTextElements('.splitted-text', 'lines, words')

        tl.to(paths, {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 1,
            onStart: () => {
                paths.forEach(path => (path.style.transform = 'translateY(100%)'))
            }
        }, .5
        ).from(imgRef.current, {
            clipPath: 'polygon(0% 0%, 0% 0%, 100% 0%, 100% 0%)',
            duration: 0.8,
            delay: .6
        }, '<'
        ).from(arrowRef.current, {
            y: 30,
            opacity: 0,
            duration: 0.6
        }, '-=0.3'
        ).from(btnRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.6
        }, '<'
        ).fromTo('.splitted-text .line-span', {
            yPercent: 100,
            opacity: 0,
        }, {
            yPercent: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.6
        }, '<'
        ).from('.date-container p', {
            y: 30,
            opacity: 0,
            duration: 0.6
        }, '<'
        ).from('.date-container h3', {
            y: 30,
            opacity: 0,
            duration: 0.6
        }, '-=0.7')


    }, { scope: contRef.current })

    return (
        <section ref={contRef} className='sticky inset-0 h-svh -z-10 items-end portrait:pb-2 '{...props} >
            <div className='flex flex-col h-svh md:gap-y-space-lg md:gap-0 w-full left-0 p-space-md  md:px-16'>

                <div className='mt-0 md:mt-20 h-full flex items-baseline-last md:items-center overflow-clip'>
                    <h1 className='sr-only'>I'm BamBam</h1>
                    <h1 ref={txtRef} aria-hidden='true' className="mobile-landscape md:hidden font-bold text-8xl w-full break-words leading-18">
                        Im&#8203;Bam&#8203;Bam
                        <span className="text-7xl align-top">
                            &copy;
                        </span>
                    </h1>
                    <HeroImg svgRef={svgRef} className='mobile-landscape hero-svg w-full text-gray-900 hidden md:block' />
                </div>


                <div className='grid w-full grid-cols-12 justify-between gap-x-fluid gap-y-space-md'>

                    <div className='col-span-12 flex flex-col justify-between gap-y-space-2xl pt-space-sm landscape:col-span-4 md:col-span-4 md:gap-y-space-md overflow-hidden'>
                        <p className='sr-only'>I craft high-impact apps and websites that give companies and growing brands a competitive edge.</p>
                        <div ref={arrowRef} className='hidden mobile-landscape md:block pointer-events-auto'>

                            <TextAnimate>
                                <Arrow className='size-8 text-gray-900/50 rotate-135' />
                            </TextAnimate>

                        </div>

                        <div className='flex flex-col gap-y-space-sm md:gap-y-space-md'>
                            <p aria-hidden='true' className='splitted-text w-full max-w-[30ch] text-balance text-base font-medium leading-snug xl:text-base-large 3xl:text-heading-body  text-gray-900/50 font-mono'>I craft high-impact apps and websites that give companies and growing brands a competitive edge.</p>
                            <div ref={btnRef} className='overflow-hidden'>
                                <button className='w-fit bg-gray-900/80 text-gray-50 px-5 py-2 rounded-full font-semibold pointer-events-auto'>
                                    <TextAnimate>
                                        <a href='mailto:hola@nesmanpro.es' target='_blank' className='flex items-center gap-1'>
                                            Talk to Me
                                            <Arrow className='size-4 text-white rotate-45' />
                                        </a>
                                    </TextAnimate>
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className='col-span-4 flex flex-col items-start md:items-center'>
                        <div className='flex h-fit w-fit flex-col items-center justify-center gap-y-space-2xs overflow-hidden rounded-md'>
                            <div
                                ref={imgRef}
                                className='h-[15vh] max-w-lg landscape:h-[50vh] md:h-[50vh]'
                                style={{
                                    clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0)'
                                }}
                            >
                                <img className='size-full object-cover rounded-lg' src={imgProfile} alt="Profile picture of BamBam" />
                            </div>
                        </div>
                    </div>

                    <div className='date-container end-1 col-span-8 flex w-full flex-col items-end justify-end landscape:col-span-4 md:col-span-4'>

                        <p className='uppercase text-xs md:text-sm text-gray-900/50 font-mono '>
                            Available for freelance work
                        </p>
                        <h3 className='font-semibold text-3xl sm:text-4xl md:text-7xl uppercase text-neue '>
                            July '25
                        </h3>

                    </div>
                </div>
            </div>
        </section>
    )
}
