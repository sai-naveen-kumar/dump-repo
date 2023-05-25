import Masonry from "react-masonry-css";
import "./resume.css"
function Resume(props) {
    const breakpointColumnsObj = {
        default: 2,
        767: 1,
    };
    return (
        <>
            <section className="container" id="resume">
                <div className="section-title">
                    <div className="font-maitree">My <span className="text-blue font-maitree">Resume</span></div>
                    <p>
                        A highly skilled and versatile Full Stack Developer with over 2 years of experience in designing, developing, and maintaining web applications.
                        Seeking a challenging position to leverage my strong technical aptitude, problem-solving abilities, and passion for coding to contribute to the growth
                        of a forward-thinking organization. Committed to staying current with industry trends and advancements to deliver innovative and efficient solutions
                        that exceed client expectations.
                    </p>
                </div>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="resume-body"
                    columnClassName="resume-body-item">
                    <div id="sumary">
                        <h3 className="resume-title">Sumary</h3>
                        <div className="resume-item">
                            <h4>Premkumar Nunna</h4>
                            <p>
                                Innovative and deadline-driven Graphic Designer with 3+ years of
                                experience designing and developing user-centered digital/print
                                marketing material from initial concept to final, polished
                                deliverable.
                            </p>
                            <ul>
                                <li>Visakhapatnam-530017, India</li>
                                <li>(+91) 9553261501</li>
                                <li><a href="mailto:premkumarnunna@gmail.com">premkumarnunna@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div id="education">
                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>Master of Computer Science &amp; Data Analytics</h4>
                            <h5>2019 - 2021</h5>
                            <p>
                                <em>Central University of Rajasthan, Ajmer</em>
                            </p>
                            <p>
                                Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto
                                autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti
                                sand markend
                            </p>
                        </div>
                        <div className="resume-item">
                            <h4>Bachelor of Science in Computer Science</h4>
                            <h5>2016 - 2019</h5>
                            <p>
                                <em>Silver Jubilee Govt Degree College, Kurnool</em>
                            </p>
                            <p>
                                Quia nobis sequi est occaecati aut. Repudiandae et iusto quae
                                reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates
                                asperiores voluptatem Earum molestiae consequatur neque etlon sader
                                mart dila
                            </p>
                        </div>
                    </div>
                    <div id="experience">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                            <h4>Senior Software Developement Engineer</h4>
                            <h5>2022 - Present</h5>
                            <p>
                                <em>Cloudearl Sol Pvt Ltd, Visakhapatnam, India </em>
                            </p>
                            <ul>
                                <li>
                                    Lead in the design, development, and implementation of the graphic,
                                    layout, and production communication materials
                                </li>
                                <li>
                                    Delegate tasks to the 7 members of the design team and provide
                                    counsel on all aspects of the project.{" "}
                                </li>
                                <li>
                                    Supervise the assessment of all graphic materials in order to ensure
                                    quality and accuracy of the design
                                </li>
                                <li>
                                    Oversee the efficient use of production project budgets ranging from
                                    $2,000 - $25,000
                                </li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Software Developer</h4>
                            <h5>2021 - 2022</h5>
                            <p>
                                <em>Cloudearl Sol Pvt Ltd, Visakhapatnam, India </em>
                            </p>
                            <ul>
                                <li>
                                    Developed numerous marketing programs (logos,
                                    brochures,infographics, presentations, and advertisements).
                                </li>
                                <li>
                                    Managed up to 5 projects or tasks at a given time while under
                                    pressure
                                </li>
                                <li>
                                    Recommended and consulted with clients on the most appropriate
                                    graphic design
                                </li>
                                <li>
                                    Created 4+ design presentations and proposals a month for clients
                                    and account managers
                                </li>
                            </ul>
                        </div>
                    </div>
                </Masonry>
            </section >

        </>
    );
}

export default Resume;
