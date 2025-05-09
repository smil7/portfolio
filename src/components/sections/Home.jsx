export const Home = () => {
    return (
        <section 
            id="home" 
            className="min-h-screen flex items-center justify-center relative"
        >
            <div className="text-center z-10 px-4">
                <h1 
                    className="text-5xl md:text-7xl font-bond mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right"
                >
                    Hellos its me, Osama Abdulghani
                </h1>

                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    I&apos;m a ML / Software engineer who loves implementing large, scalable
                    software applications along with integrating ML solutions. Additionally, 
                    I would love working on projects that implements software into hardware 
                    devices. My goal is to build solutions that contribute to open-source software
                    and make the world better place.
                </p>
                <div className="flex justify-center space-x-4">
                    <a 
                        href="#projects"
                        className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"    
                    >
                        View my projects
                    </a>
                    <a 
                        href="#contact"
                        className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"    
                    >
                        Contact me
                    </a>
                </div>
            </div>
        </section>
    );
};