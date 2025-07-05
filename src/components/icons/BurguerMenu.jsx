import { twMerge } from "tailwind-merge"

export default function BurgerIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={twMerge("h-6 w-6", className)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
        </svg>
    )
}

