import { twMerge } from "tailwind-merge";


export default function Preloader({ className, preloaderRef, ...props }) {
    return (
        <div
            ref={preloaderRef}
            className={twMerge('bg-gray-950 h-screen w-screen fixed top-0 left-0 z-[999] overflow-hidden block pointer-events-none ', className)}
            {...props}
        >

        </div>
    )
}
