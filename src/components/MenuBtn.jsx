import TextAnimate from './atoms/textAnimate'
import Arrow from './icons/Arrow'
import BurgerIcon from './icons/BurguerMenu'


export default function MenuBtn({ ref }) {
    return (
        <div className="fixed top-5 right-5 md:right-15 flex items-center gap-x-space-xs md:gap-x-space-md z-10 scale-0"
            ref={ref}
        >
            <button className='py-5 px-8 bg-amber-100 rounded-full cursor-pointer duration-1000 ease-expo hover:scale-90'>
                <TextAnimate>
                    <span className='flex items-center gap-2'>
                        Let's Talk
                        <Arrow className='size-4 rotate-45' />
                    </span>
                </TextAnimate>
            </button>
            <button className='p-5 bg-amber-200 rounded-full cursor-pointer duration-1000 ease-expo hover:scale-90'>
                <BurgerIcon className='text-gray-950' />
            </button>
        </div>
    )
}
