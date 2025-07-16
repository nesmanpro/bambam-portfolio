
import { twMerge } from 'tailwind-merge'
import { CustomEase } from "gsap/CustomEase";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { splitTextElements } from '../../animations/SplitText';

gsap.registerPlugin(useGSAP, CustomEase);
CustomEase.create('hop', '.8, 0, .3, 1');

export default function SectionLayout({
    id,
    title,
    subtitle,
    description,
    extra,
    className,
    children }) {
    const contRef = useRef()

    useGSAP(() => {
        const title = contRef.current.querySelector('.split-title');
        const subtitle = contRef.current.querySelector('.split-subtitle');
        const descriptionEl = contRef.current.querySelector('.split-description');

        splitTextElements(title);
        splitTextElements(subtitle, 'lines');
        splitTextElements(descriptionEl, 'lines');

        gsap.from(title.querySelectorAll('span'), {
            y: 100,
            opacity: 0,
            ease: 'hop',
            stagger: 0.03,
            duration: 0.3,
            scrollTrigger: {
                trigger: title,
                start: 'bottom 95%',
            }
        })

        gsap.from(subtitle.querySelectorAll('.line span'), {
            y: 50,
            opacity: 0,
            ease: 'hop',
            stagger: 0.03,
            duration: 0.2,
            scrollTrigger: {
                trigger: subtitle,
                start: 'bottom bottom',
            }
        })

        gsap.from(descriptionEl.querySelectorAll('.line span'), {
            y: 50,
            opacity: 0,
            ease: 'hop',
            stagger: 0.1,
            duration: 0.4,
            scrollTrigger: {
                trigger: descriptionEl,
                start: 'bottom bottom',
            }
        })

        return () => {
            [title, subtitle, descriptionEl].forEach(el => el?._splitTextInstance?.revert());
        };
    }, { scope: contRef });


    return (
        <section ref={contRef} id={id} className={twMerge('px-8 pt-20', className)}>
            <header className='flex flex-col w-full gap-y-10 md:gap-y-22'>
                <h1 className='split-title font-bold uppercase section-heading text-heading-1-alt sm:text-heading-1 leading-[.8em]'>{title} {extra && <span className='text-heading-2'>{extra}</span>}</h1>

                <div className='flex grid-cols-12 gap md:grid gap-fluid'>
                    <div className='flex col-span-7 flex-col sm:flex-row md:col-start-6 gap-x-15 gap-y-6'>
                        <p className='split-subtitle text-sm sm:text-base md:text-lg text-gray-900/80 font-mono uppercase overflow-hidden'>{subtitle}</p>
                        <p className='split-description w-full max-w-[35ch] text-balance text-base font-sans leading-tight overflow-hidden'>{description}</p>
                    </div>
                </div>
            </header>
            {children}
        </section>
    )
}
