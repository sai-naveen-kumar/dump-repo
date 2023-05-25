import "./work.css"
function Work(props) {
    return (
        <>
            <section id="work" className="container">
                <div className="section-title">
                    <div className="font-maitree">My <span className="text-blue font-maitree">Wrok</span></div>
                </div>
                <div className="work-body">
                    <a href="http://github.com" target="_blank" rel="noopener noreferrer">
                        <div className="card">
                            <img src={process.env.PUBLIC_URL + "/img/project.png"} alt="Project-1" />
                            <div className="project-info">
                                <h1 className="font-maitree">Project 1</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, modi?</p>
                            </div>
                        </div>
                    </a>
                    <a href="http://github.com" target="_blank" rel="noopener noreferrer">
                        <div className="card">
                            <img src={process.env.PUBLIC_URL + "/img/project.png"} alt="Project-2" />
                            <div className="project-info">
                                <h1 className="font-maitree">Project 2</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, modi?</p>
                            </div>
                        </div>
                    </a>
                    <a href="http://github.com" target="_blank" rel="noopener noreferrer">
                        <div className="card">
                            <img src={process.env.PUBLIC_URL + "/img/project.png"} alt="Project-3" />
                            <div className="project-info">
                                <h1 className="font-maitree">Project 3</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, modi?</p>
                            </div>
                        </div>
                    </a>
                </div>
            </section >
        </>
    );
}

export default Work;
