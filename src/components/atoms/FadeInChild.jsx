import { Children } from "react";


export default function FadeInChild({ children }) {
    return (
        <div className="container mx-auto grid max-w-screen-lg grid-cols-3 gap-4  ">
            {
                Children.toArray(children).map((child, idx) => (
                    <div
                        key={idx}
                        style={{
                            opacity: 0,
                            animation: 'fadeInOut 0.5s ease-out forwards',
                            animationDelay: `${idx * 100}ms`
                        }}
                    >
                        {child}
                    </div>
                ))
            }
        </div>
    )
}
