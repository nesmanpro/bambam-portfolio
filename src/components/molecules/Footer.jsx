import CurrentTime from '../atoms/CurrentTime'
import TextAnimate from '../atoms/textAnimate'
import Arrow from '../icons/Arrow'


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

const socialItems = [
    {
        url: '#service',
        label: 'instagram'
    },
    {
        url: '#work',
        label: 'linkedin'
    },
    {
        url: '#about',
        label: 'behance'
    },
    {
        url: '#contact',
        label: 'github'
    },
]

export const Footer = () => {

    return (
        <footer className='flex flex-col items-center justify-center gap-y-space-xl p-space-lg text-gray-950/80 bg-white'>
            <div className='grid w-full grid-cols-2 justify-start gap-y-space-md gap-x-space-md text-base md:grid-cols-12 '>
                <div className='flex flex-col md:col-span-6'>
                    <h3 className='mb-space-xs flex border-b-[1.5px] border-gray-950/20 pb-space-2xs font-bold tracking-tight'>Menu</h3>
                    <ul className='flex flex-col '>
                        {navItems.map(item => (
                            <li key={item.label}>
                                <a className='leading-none ' href={item.url}>
                                    <TextAnimate className={'capitalize text-[.85em] font-normal leading-space-sm text-gray-950/40'}>
                                        {item.label}
                                    </TextAnimate>
                                </a>
                            </li>
                        ))}

                    </ul>
                </div>
                <div className='flex flex-col md:col-span-6'>
                    <h3 className='mb-space-xs flex border-b-[1.5px] border-gray-950/20 pb-space-2xs font-bold tracking-tight'>Socials</h3>
                    <ul className='flex flex-col'>
                        {socialItems.map(item => (
                            <li key={item.label}>
                                <a className='leading-none ' href={item.url}>
                                    <TextAnimate className={'capitalize text-[.85em] font-normal leading-space-sm text-gray-950/40'}>
                                        {item.label}
                                    </TextAnimate>
                                </a>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
            <div className='flex items-end justify-between gap-x-fluid md:grid md:grid-cols-12 w-full'>
                <span className='flex flex-col text-heading-3 font-bold leading-space-md tracking-tight sm:order-first sm:text-heading-3 md:col-span-6'>
                    <span>
                        &copy; 2025&nbsp;
                        <br className='block lg:hidden' />
                        Lucas BamBam
                    </span>
                    <span>All rights reserved.</span>
                </span>
                <div className="flex flex-col text-base-small md:col-span-3">
                    <span className="font-bold uppercase">Local Time</span>
                    <span className="font-mono uppercase text-gray-950/60"><CurrentTime />, MLG</span>
                </div>
                <div className='hidden h-fit w-full justify-end md:col-span-3 md:flex'>
                    <a href="#home">
                        <button aria-label='scroll to top' className='hidden w-fit flex-col items-center justify-center overflow-hidden rounded-full bg-yellow-300 p-space-md duration-1000 ease-expo hover:scale-90 md:flex'>
                            <TextAnimate>
                                <Arrow className='text-gray-800 size-9' />
                            </TextAnimate>
                        </button>
                    </a>
                </div>
            </div>
        </footer>
    )
}
