import "./skills.css"

function Skill(props) {
    return (
        <>
            <style>
                {`
                    .skill_bar .bar .pw-${props.percentage}{
                        width: ${props.percentage}%;
                        animation: pw-${props.percentage} 2s;
                    }
                    @keyframes pw-${props.percentage} {
                        0%{
                            width: 0%;
                        }100%{
                            width: ${props.percentage}%;
                        }
                    }

                `}
            </style>
            <div className="skill_bar">
                <div className="info">
                    <p>{props.skill}</p>
                    <p>{props.percentage}%</p>
                </div>
                <div className="bar">
                    <span className={"pw-" + props.percentage} />
                </div>
            </div>
        </>
    );
}

function Skills(props) {
    return (
        <>
            <section className="container" id="skills">
                <div className="section-title">
                    <div className="font-maitree">My <span className="text-blue font-maitree">Skills</span>
                    </div>
                    <p>Here is my skills to represent my Expertise</p>
                </div>
                <div className="skills-body">
                    <Skill skill="Advanced Python (OOPS)" percentage="90" />
                    <Skill skill="Django, React" percentage="85" />
                    <Skill skill="HTML, CSS, Bootstrap" percentage="80" />
                    <Skill skill="Javascript" percentage="80" />
                    <Skill skill="PostegreSQL" percentage="60" />
                    <Skill skill="MySQL" percentage="60" />
                    <Skill skill="Git" percentage="90" />
                    <Skill skill="Jenkins" percentage="75" />
                    <Skill skill="Docker" percentage="90" />
                    <Skill skill="Gitlab CI/CD" percentage="65" />
                    <Skill skill="Cloud Deployment" percentage="80" />
                    <Skill skill="AWS, GCP, Azure" percentage="70" />
                </div>
            </section>
        </>
    );
}

export default Skills;
