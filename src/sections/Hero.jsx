import imgProfile from '/profilepic.jpg';
import TextAnimate from '../components/atoms/textAnimate';
import Arrow from '../components/icons/Arrow';
import { HeroImg } from '../components/icons/heroImg';


export default function Hero({ ...props }) {
    return (
        <section className='sticky inset-0 -z-10 items-end '{...props} >
            <div className=' flex flex-col h-svh md:gap-y-space-lg md:gap-0 w-full left-0 p-space-md  md:px-16'>

                <div className='mt-0 md:mt-20 h-full flex items-baseline-last md:items-center overflow-clip'>
                    <h1 className='sr-only'>I'm BamBam</h1>
                    <h1 aria-hidden='true' className="md:hidden font-bold text-8xl w-full break-words leading-18">
                        Im&#8203;Bam&#8203;Bam
                        <span className="text-7xl align-top">
                            &copy;
                        </span>
                    </h1>
                    <HeroImg className='w-full text-gray-900 hidden md:block' />
                </div>


                <div className=' grid w-full grid-cols-12 justify-between gap-x-fluid gap-y-space-md'>

                    <div className='col-span-12 flex flex-col justify-between gap-y-space-2xl pt-space-sm md:col-span-4 md:gap-y-space-md'>
                        <div className='hidden md:flex pointer-events-auto'>
                            <TextAnimate>
                                <Arrow className='size-8 text-gray-900/50 rotate-135' />
                            </TextAnimate>
                        </div>

                        <div className='flex flex-col gap-6 mt-space-md'>
                            <p className='text-sm sm:text-base md:text-xl text-gray-900/50 font-mono'>I craft high-impact websites that give companies and growing brands a competitive edge.</p>
                            <button className='w-fit bg-gray-900/80 text-gray-50 px-5 py-2 rounded-full font-semibold pointer-events-auto'>
                                <TextAnimate>
                                    <div className='flex items-center gap-1'>

                                        Talk to Me
                                        <Arrow className='size-4 text-white rotate-45' />
                                    </div>
                                </TextAnimate>
                            </button>
                        </div>

                    </div>
                    <div className='col-span-4 flex flex-col items-start md:items-center'>
                        <div className='flex h-fit w-fit flex-col items-center justify-center gap-y-space-2xs overflow-hidden rounded-md [clip-path:polygon(0px_0px,100%_0%,100%_100%,0%_100%);]'>
                            <div className='h-[15vh] max-w-lg md:h-[50vh]'>

                                <img className='size-full object-cover rounded-lg' src={imgProfile} alt="Profile picture of BamBam" />
                            </div>
                        </div>
                    </div>

                    <div className='end-1 col-span-8 flex w-full flex-col items-end justify-end md:col-span-4'>

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
