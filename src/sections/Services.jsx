import SectionLayout from "../components/molecules/SectionLayout"


const articles = [
    {
        id: '01',
        title: 'Web Development',
        description: 'A website developed to captivate and convert can elevate your brand to new heights. My custom-coded sites are meticulously crafted to reflect your unique identity, delivering seamless experiences with a focus on animation—keeping your audience engaged and returning.',
        examples: {
            a: 'CMS Integrations',
            b: 'Motion & Animations',
            c: '3D Developing',
        }
    },
    {
        id: '02',
        title: 'Web Design',
        description: "Amplify your online presence with a website that truly connects with your audience's feelings and desires. I design stunning, high-converting sites that align with your business goals, helping you stand out and scale effectively.",
        examples: {
            a: 'Responsive Design',
            b: 'Wireframing',
            c: 'UX Writing',
        }
    },
    {
        id: '03',
        title: 'SEO',
        description: 'Your website deserves to be seen. I optimize your online presence to elevate your visibility in search results, helping your business attract the right audience and stand out in the digital landscape.',
        examples: {
            a: 'Technical SEO',
            b: 'On-Page Optimization',
            c: 'SEO Audits & Analysis',
        }
    },
]

export default function Services() {

    return (

        <SectionLayout
            id='service'
            title='How I Can help you/'
            subtitle='(service)'
            description="Frustrated with websites that don't reflect your brand or drive growth? I craft premium web experiences that captivate and help you focus on growing your business."
        >
            <div className=' flex flex-col items-center gap-14 mt-10 mx-6 md:mt-20 pb-10'>
                {
                    articles.map((art, idx) => (
                        <article
                            key={art.id}
                            className={`border-t-1 border-gray-950/20 sticky bg-amber-300 min-h-[450px] md:min-h-[380px]`}
                            style={{
                                top: `calc(100px + ${idx * 90}px)`,
                            }}
                        >
                            <header className="flex grid-cols-12 items-center justify-start gap-x-space-xs text-left text-heading-2 font-semibold md:justify-between md:grid md:gap-x-fluid mb-space-md">
                                <span className="col-span-2">({art.id})</span>
                                <span className="col-span-6 col-start-6 py-space-md 2xl:py-space-sm leading-space-md">{art.title}</span>
                            </header>
                            <main className="gap-fluid relative flex min-h-[30vh] flex-col place-items-start pt-space-3xs md:grid md:min-h-[40vh] md:grid-cols-12">
                                <div className="col-span-6 col-start-6">
                                    <p>{art.description}</p>
                                    <div className="mt-4 flex items-center gap-x-space-sm border-b-1 border-gray-900/30">
                                        <p className="font-sans text-base text-gray-950/50">01</p>
                                        <p className="font-semibold text-heading-5">{art.examples.a}</p>
                                    </div>
                                    <div className="mt-4 flex items-center gap-x-space-sm border-b-1 border-gray-900/30">
                                        <p className="font-sans text-base text-gray-950/50">02</p>
                                        <p className="font-semibold text-heading-5">{art.examples.b}</p>
                                    </div>
                                    <div className="mt-4 flex items-center gap-x-space-sm">
                                        <p className="font-sans text-base text-gray-950/50">03</p>
                                        <p className="font-semibold text-heading-5">{art.examples.c}</p>
                                    </div>
                                </div>
                            </main>

                        </article>
                    ))
                }

            </div>

        </SectionLayout>
    )
}
