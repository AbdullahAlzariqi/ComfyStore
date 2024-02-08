

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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam rem consectetur accusamus quidem perspiciatis, tenetur, architecto, delectus a sunt molestias quibusdam porro nesciunt omnis eaque veritatis voluptatibus! Quae, velit laboriosam!
        </p>
    </>
}

export default About;