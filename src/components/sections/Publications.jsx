export const Publications = () => {
    return(
        <section
            id="publications"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    {" "}
                    Publications
                </h2>
                <div> {/* className="grid grid-cols-1 md:grid-cols-2 gap-6" */}
                    <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Abstractive Summarization of Lectures and Lecture Segments Transcripts with BART</h3>
                        <p className="text-gray-400 mb-4">
                            A paper that discusses about the data collected and the summarization feature behind the LASER project.
                        </p>
                        <div className="flex justify-between items-center">
                            <a 
                                href="https://link.springer.com/chapter/10.1007/978-981-97-9255-9_4"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"    
                            > 
                                {" "}
                                Link to Publication {"->"} 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}