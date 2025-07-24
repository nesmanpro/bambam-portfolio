
import { useRef } from 'react'
import Navbar from './components/organisms/Navbar'
import Hero from './sections/Hero'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Services from './sections/Services';
import MenuBtn from './components/molecules/MenuBtn';
import Works from './sections/Works';
import { About } from './sections/About';
import { Footer } from './components/organisms/Footer';
import SideMenu from './components/organisms/SideMenu';
import { useHeroScrollAnimation, useInitialLoading } from './hooks/animations/useHeroAnimation';
import Preloader from './sections/Preloader';

gsap.registerPlugin(useGSAP, ScrollTrigger);



function App() {

  const containerRef = useRef();
  const heroRef = useRef();
  const menuBtnRef = useRef();
  const sectionRef = useRef();
  const preloaderRef = useRef();
  const navRef = useRef();

  useHeroScrollAnimation({ containerRef, heroRef, menuBtnRef, sectionRef });
  useInitialLoading({ containerRef, preloaderRef, navRef })

  return (
    <div ref={containerRef} id='home' className='w-screen h-screen z-0 relative '>
      <Preloader preloaderRef={preloaderRef} />
      <header ref={navRef} className='tracking-body absolute top-0 z-40 w-full '>
        <Navbar className='px-8 md:px-17' />
      </header>
      <SideMenu />
      <MenuBtn ref={menuBtnRef} />
      <div className='mb-[-100svh] w-screen pointer-events-none'>
        <Hero ref={heroRef} />
        <div className='h-svh'></div>
      </div>
      <div ref={sectionRef} className="trigger bg-amber-300 rounded-3xl">
        <Services />
        <Works />
        <About />
      </div>
      <Footer />
    </div>
  )
}

export default App
