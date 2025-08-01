import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export const CustomCursor = ({ x, y, visible }) => {

    const cursorRef = useRef(null)
    const textRef = useRef(null)


    useGSAP(() => {
        let tl = gsap.timeline({ defaults: { duration: 0.2, ease: 'bounce.inOut' } });
        let mm = gsap.matchMedia();

        mm.add('(min-width: 500px)', () => {
            if (visible) {
                tl.to(cursorRef.current, {
                    scale: 1, opacity: 1
                })
            } else {
                tl.to(cursorRef.current, { scale: 0, opacity: 0 })
            }
        })

    }, { dependencies: [visible] })


    return (
        <div
            ref={cursorRef}
            className="fixed size-[120px] z-100 bg-yellow-50 rounded-full flex justify-center items-center -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-0"
            style={{ left: x, top: y }}
        >
            <h3
                ref={textRef}
                className="font-bold text-lg">
                Let's see!
            </h3>
        </div>
    )
}
