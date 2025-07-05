import imgProfile from '../assets/profilepic.jpg';
import TextAnimate from '../components/atoms/textAnimate';
import Arrow from '../components/icons/Arrow';
import { HeroImg } from '../components/icons/heroImg';


export default function Hero({ ...props }) {
    return (
        <div className='fixed inset-0 -z-2 '{...props} >
            <div className='flex flex-col justify-end-safe gap-12 md:gap-0 w-full h-full absolute left-0 px-8 md:px-16'>

                <div className='mt-0 md:mt-20 h-full flex items-baseline-last md:items-center overflow-clip'>
                    <h1 className='sr-only'>I'm BamBam</h1>
                    <h1 className="md:hidden font-bold text-8xl w-full break-words leading-18"><span></span>
                        Im&#8203;Bam&#8203;Bam<span className="text-7xl align-top">&copy;</span>
                    </h1>
                    <HeroImg className='w-full text-gray-900 hidden md:block' />
                </div>


                <div className='flex flex-col mb-6 gap-4 md:gap-10 md:mb-18 md:flex-row'>
                    <div className='flex flex-col justify-between flex-1/3 gap-10'>
                        <div className='hidden md:flex'>
                            <TextAnimate>
                                <Arrow className='size-8 text-gray-900/50 rotate-135' />
                            </TextAnimate>
                        </div>

                        <div className='flex flex-col gap-6'>
                            <p className='text-sm sm:text-base md:text-xl text-gray-900/50 font-mono'>I craft high-impact websites that give companies and growing brands a competitive edge.</p>
                            <button className='w-fit bg-gray-900/80 text-gray-50 px-5 py-2 rounded-full font-semibold '>
                                <TextAnimate>
                                    <div className='flex items-center gap-1'>

                                        Talk to Me
                                        <Arrow className='size-4 text-white rotate-45' />
                                    </div>
                                </TextAnimate>
                            </button>
                        </div>

                    </div>


                    <div className='flex-2/3 flex justify-between gap-6'>
                        <div>

                            <img className='size-full max-w-[150px] sm:max-w-[200px] lg:mx-auto lg:max-w-[300px] object-cover rounded-lg' src={imgProfile} alt="Profile picture of BamBam" />
                        </div>
                        <div className='text-right flex flex-col justify-end'>

                            <p className='uppercase text-xs md:text-sm text-gray-900/50 font-mono '>
                                Available for freelance work
                            </p>
                            <h3 className='font-semibold text-3xl sm:text-4xl md:text-7xl uppercase text-neue '>
                                July '25
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
