import Arrow from "../components/icons/Arrow"
import imgProfile from '/profilepic.jpg';

export const About = () => {
    return (
        <section id='about' className='px-8 pt-20 pb-space-3xl flex flex-col w-full gap-y-10 md:gap-y-22'>

            <header className="grid grid-cols-12 gap-x-fluid">
                <Arrow className='hidden lg:flex size-20 rotate-135' />
                <h1 className='font-bold flex uppercase section-heading text-heading-1-alt  md:text-heading-1 lg:text-heading-1-alt xl:text-heading-1 leading-[.8em] w-full col-span-full lg:col-span-7 lg:col-start-6 '>Designer, developer, creative /</h1>
            </header>

            <div className='flex flex-col grid-cols-12 md:grid gap-fluid'>

                <div className="pointer-events-none z-0 col-span-4 flex aspect-square w-full items-center overflow-clip md:aspect-auto md:items-end">

                    <img className='aspect-auto w-full object-cover object-center rounded-lg' src={imgProfile} alt="Headshot of Lucas Bam bam a white t-shirt against a black background" />
                </div>

                <div className='col-span-7 col-start-6 flex flex-col gap-y-space-lg lg:gap-y-space-xl '>
                    <p className="sr-only">Developer with a strong foundation in graphic design, branding, and UI/UX design, fields in which I have over 15 years of experience.</p>
                    <p aria-hidden='true' className='w-full max-w-[39ch] text-balance text-heading-5 font-medium leading-snug'>Developer with a strong foundation in graphic design, branding, and UI/UX design, fields in which I have over 15 years of experience.</p>
                    <div className="flex flex-col gap-x-space-xl gap-y-space-sm lg:flex-row">
                        <p className='text-sm sm:text-base md:text-lg text-gray-900/80 font-mono uppercase flex-shrink-0 whitespace-nowrap'>(about me)</p>
                        <div className="flex flex-col gap-y-space-md">
                            <p>I'm specialize in libraries and frameworks such as React, Next.js, Vite, Tailwind CSS, SASS, GSAP, and Framer Motion, working across both corporate environments and freelance projects over the past three years.</p>
                            <p>With the goal of delivering more comprehensive solutions, I began training in backend technologies. Since then, I've worked with Node.js, Express, and MongoDB, building APIs following *clean architecture* and microservices patterns. I've also integrated headless CMS solutions such as Strapi, WordPress, and Shopify, using databases like SQLite, PostgreSQL, and GraphQL to support client autonomy. Additionally, I have hands-on experience with containerized environments using Docker and Kubernetes for deployment, orchestration, and application scalability.
                            </p>
                            <p>My versatile background and product-focused mindset allow me to connect design, user experience, and development to deliver comprehensive, functional, and scalable solutions that align with both user needs and business goals.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
