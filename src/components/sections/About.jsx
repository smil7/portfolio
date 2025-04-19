export const About = () => {

    const programmingSkils = [
        "Python",
        "JavaScript",
        "C++",
        "Java",
        "SQL"
    ];

    const frontendSkills = [
        "React",
        "Next",
        "Vanilla HTML/CSS/JS"
    ];

    const backendSkills = [
        "Django",
        "Flask",
        "Node.js",
        "Postgres"
    ];

    const machinelearningSkills = [
        "Sklearn",
        "PyTorch",
        "Transformers"
    ];

    const technologies = [
        "Git/GitHub",
        "Visual Studio Code",
        "PubNub",
        "AWS",
        "Unity"
    ]

    return (
        <section 
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    {" "}
                    About me
                </h2>

                <div className="glass rounded-xl p-8 border-white/10 birder hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Passionate ML/software engineer looking to gain experience in building 
                        large applications and contributing to open-source software.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {programmingSkils.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition
                                    ">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition
                                    ">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition
                                    ">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">ML skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {machinelearningSkills.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition
                                    ">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {technologies.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition
                                    ">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <strong>B.S. in Computer Science</strong> - University of Sharjah
                                (2020-2024)
                            <li>
                                Relevant Coursework: Data Structures, Design & Analysis of Algorithms,
                                Operating Systems, Software Engineer, Information Systems, Interactive
                                3D Design, etc.
                            </li>
                            <br />
                                <strong>MEng in Systems and Technology <i>specilizing in Automation and Smart Systems</i></strong> - McMaster University
                                (2024-2026)
                            <li>
                                Relevant Coursework: Machine Learning, Deep Learning, Internet 
                                of Things, Computational Natural Language Processing, Cloud Computing, etc.
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">
                                    {" "}
                                    AI / Software Engineer intern at LABonWEB (01/25 - 08/25){" "}
                                </h4>
                                <li>
                                    Intern at LABonWEB, adding features to the chatbot, enhancing the functionalities and performance of the AI assistant
                                    chatbot, experimenting with different Deep Learning frameworks such as LLMs, PyTorch to automate and enhance
                                    the creation of simulation labs for students and educators.
                                </li>
                            </div>

                            <div>
                                <h4 className="font-semibold">
                                    {" "}
                                    Research Assistant at University of Sharjah (08/23 - 02/24){" "}
                                </h4>
                                <li>
                                    Engineered Large Language Models (LLMs), such as Llama and Mistral, to analyze texts within various types of
                                    files (such as pdfs, excel sheets, etc.) and making it locally so that LLMs don&apos;t get trained on private data.
                                </li>
                                <li>
                                    Developed a chatbot where the user can upload different file types and have a conversation with an LLM by building a
                                    Flask API and leveraging LangChain framework that automated the process of sending and retrieving data.
                                </li>
                            </div>

                            <div>
                                <h4 className="font-semibold">
                                    {" "}
                                    Machine Learning Intern at University of Sharjah (05/23 - 07/23){" "}
                                </h4>
                                <li>
                                    Built text classification models, including Bert, DistilBert and RoBerta, to train them on 2000+ different Amazon
                                    products (such as Books, Electronics, Clothes, etc) and developed a Flask pipeline making it easy to use.
                                </li>
                                <li>
                                    Leveraged prompt engineering techniques to facilitate conversations with LLMs, by providing drop down buttons list
                                    using ReactJS to allow the user to change the behavior of LLMs.
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}