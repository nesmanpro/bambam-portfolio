import { twMerge } from "tailwind-merge";
import TextAnimate from "./atoms/textAnimate";

const navItems = [
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


export default function Navbar({ className }) {

    return (
        <div className={twMerge('flex py-4 justify-between items-center w-full md:py-8', className)}>
            <div className='flex flex-col lg:flex-row lg:items-center lg:gap-15 '>
                <div className='font-bold text-xl relative text-gray-900/90'>ImBamBam <small className='absolute '>&copy;</small></div>
                <p className="text-gray-900/90 w-34 md:w-fit">(Graphic Designer & Web Developer)</p>
            </div>
            <ul className='flex flex-col gap-1 md:flex-row md:gap-5 '>
                {navItems.map(itm => (

                    <li key={itm.label}>
                        <a href={itm.url}>
                            <TextAnimate className="font-normal capitalize">
                                {itm.label}
                            </TextAnimate>
                        </a>
                    </li>
                ))}

            </ul>

        </div>
    )
}
