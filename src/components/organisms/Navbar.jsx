import { twMerge } from "tailwind-merge";
import TextAnimate from "../atoms/textAnimate";

const navItems = [
    {
        url: '#service',
        label: 'Service'
    },
    {
        url: '#work',
        label: 'Work'
    },
    {
        url: '#about',
        label: 'About'
    }
]


export default function Navbar({ className }) {

    return (
        <div className={twMerge('flex py-1 sm:py-4 justify-between items-center w-full md:py-8', className)}>
            <div className='flex flex-col lg:flex-row lg:items-center lg:gap-15 '>
                <div className='font-bold text-xl relative text-gray-900/90 hover:scale-115 hover:-rotate-3 transition-all duration-75 ease-in-out cursor-none'>ImBamBam <small className='absolute '>&copy;</small></div>
                <p className="text-gray-900/90 w-34 md:w-fit">(Graphic Designer & Web Developer)</p>
            </div>
            <ul className='flex flex-col gap-1 landscape:flex-row landscape:gap-3 md:flex-row md:gap-5 '>
                {navItems.map(itm => (

                    <li key={itm.label}>
                        <a href={itm.url}>
                            <TextAnimate className="">
                                <span className="font-normal capitalize 2xl:text-xl">
                                    {itm.label}
                                </span>
                            </TextAnimate>
                        </a>
                    </li>
                ))}

            </ul>

        </div>
    )
}
