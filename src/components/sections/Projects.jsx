export const Projects = () => {
    return(
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    {" "}
                    Features Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">LASER</h3>
                        <p className="text-gray-400 mb-4">
                            LASER is a tool that empowers students to learn efficiently
                            from video lectures by providing transcription, segmentation,
                            summarization, and question answering features 
                            through advanced generative AI.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Flask", "PyTorch", "Transformers"].map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a 
                                href="https://github.com/YaserAlOsh/LASER"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"    
                            > 
                                {" "}
                                View Project {"->"} 
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">SMARTSpace</h3>
                        <p className="text-gray-400 mb-4">
                            SMARTSpace is an IoT Smart Environmental Control System
                            capable of monitoring, adjusting, and securing a given
                            space such as home or offices.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Node.js", "PyTorch", "Raspberry Pi"].map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a 
                                href="https://github.com/smil7/SMARTSpace"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"    
                            > 
                                {" "}
                                View Project {"->"} 
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">AI Teaching Assistant</h3>
                        <p className="text-gray-400 mb-4">
                            The AI-TA is an interactive platform for students to upload
                            the course materials to ask questions and receive guidance
                            as a typical assistant offered by a human TA.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React.js", "Flask", "LangChain"].map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a 
                                href="https://github.com/smil7/AI-Teaching-Assistant"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"    
                            > 
                                {" "}
                                View Project {"->"} 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}