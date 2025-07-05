
import { twMerge } from 'tailwind-merge'

export default function SectionLayout({ id, title, subtitle, description, extra, className, children }) {
    return (
        <section id={id} className={twMerge('px-8 pt-20', className)}>
            <header className='flex flex-col w-full gap-y-10 md:gap-y-22'>
                <h1 className=' font-bold uppercase section-heading text-heading-1-alt sm:text-heading-1 leading-[.8em] '>{title} {extra && <span className='text-heading-2'>{extra}</span>}</h1>

                <div className='flex grid-cols-12 gap md:grid gap-fluid'>
                    <div className='flex col-span-7 flex-col sm:flex-row md:col-start-6 gap-x-15 gap-y-6'>
                        <p className='text-sm sm:text-base md:text-lg text-gray-900/80 font-mono uppercase'>{subtitle}</p>
                        <p className='w-full max-w-[35ch] text-balance text-base font-sans leading-tight'>{description}</p>
                    </div>
                </div>
            </header>
            {children}
        </section>
    )
}
