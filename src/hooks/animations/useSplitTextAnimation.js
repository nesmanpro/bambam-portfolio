import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { splitTextElements } from "../../animations/SplitText";

gsap.registerPlugin(SplitText, ScrollTrigger);


export const useSplitTextAnimation = ({ textRef, containerRef }) => {

    splitTextElements(containerRef, {

    })

}
