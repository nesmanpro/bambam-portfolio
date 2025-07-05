
import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Services from './sections/Services';
import MenuBtn from './components/MenuBtn';
import Works from './sections/Works';
import { About } from './sections/About';
import { Footer } from './components/molecules/Footer';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {

  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const menuBtnRef = useRef(null);
  const sectionRef = useRef(null);


  useGSAP(() => {
    if (!heroRef.current || !menuBtnRef.current || !sectionRef.current) return;

    let tl = gsap.timeline({ paused: true })

    const html = document.documentElement;



    gsap.to(heroRef.current, {
      scale: 0.9,
      ease: 'none',
      opacity: 0,
      y: 100,
      onStart: () => {
        html.style.scrollBehavior = 'auto';
      },
      onComplete: () => {
        html.style.scrollBehavior = 'smooth';
      },
      onRefresh: () => {
        html.style.scrollBehavior = 'auto';
        setTimeout(() => {
          html.style.scrollBehavior = 'smooth';
        }, 50);
      },
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: '70%',
        scrub: true,

      }
    })

    tl.fromTo(menuBtnRef.current,
      {
        display: 'none',
        ease: 'bounce.in',
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        display: 'flex',
        ease: 'elastic.inOut',
        duration: 1.9,
        opacity: 1,
      })

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      onEnter: () => {
        tl.play()
      },
      onLeaveBack: () => {
        tl.reverse()
      }
    })

  }, { scope: containerRef.current })


  return (
    <div ref={containerRef} id='home' className='w-screen h-screen z-0 relative '>
      <Navbar className=' px-8 md:px-17' />
      <MenuBtn ref={menuBtnRef} />
      <div className='h-svh -mb-[142px] md:-mb-[116px] lg:-mb-[92px] w-screen pointer-events-none'>
        <Hero ref={heroRef} />
      </div>
      <div ref={sectionRef} className="trigger bg-amber-300  rounded-3xl">
        <Services />
        <Works />
        <About />
      </div>
      <Footer />
    </div>
  )
}

export default App
