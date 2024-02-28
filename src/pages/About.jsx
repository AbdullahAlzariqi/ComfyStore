

const About = () => {

    return <>
        <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
            <h1 className="text-4xl font-bold lead-none tracking-tight sm:text-6xl">
                We love
            </h1>
            <div className="stats bg-primary shadow">
                <div className="stat">
                    <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
                        Comfy
                    </div>
                </div>
            </div>
        </div>

        <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
            Comfy, founded in 2019, is a family-owned furniture company dedicated to crafting stylish and supremely comfortable pieces for every home. Using top-quality materials and thoughtful design, we offer a diverse selection of furniture to suit any taste, all backed by exceptional customer service and a commitment to making your house a true haven of relaxation.
        </p>
    </>
}

export default About;