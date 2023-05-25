import "./about.css"
function About(props) {
    return (
        <>
            <div className="about container" id="about" onClick={props.hmClicked ? props.handleClick : undefined}>
                <div className="pf-img column">
                    {/* <div className="ellipse mx-auto" /> */}
                    {/* <img className="hero" src={process.env.PUBLIC_URL + "/img/prof-image.png"} alt="Hero" /> */}
                </div>
                <div className="about-info column">
                    <div className="font-maitree">
                        Hi, I’m <span className="text-blue font-maitree">Prem Kumar !</span>
                    </div>
                    <p>
                        An experienced Full Stack Developer with a focus on building scalable web applications using
                        Django
                        and React. I have practical experience in deploying applications in AWS cloud using Jenkins and
                        GitLab CI/CD, and have also worked with Docker for building runtime environments. I am
                        motivated,
                        adept at developing custom solutions to meet business needs, and consistently deliver
                        high-quality
                        results
                    </p>
                    <p>
                        Overall, I am a dedicated and skilled developer with a passion for software development and a
                        strong
                        technical background in Full Stack Development.
                    </p>
                    <div className="mail-box">
                        <p>premkumarnunna@gmail.com</p>
                        <a className="btn mail-button" href="mailto:premkumarnunna@gmail.com?body=%0AThis%20mail%20has%20been%20send%20with%20reference%20to%20the%20profile%20seen%20at%20https%3A%2F%2Fpremkumar0.github.io">
                            <img src={process.env.PUBLIC_URL + "/img/mail-to.svg"} alt="" />
                        </a>
                    </div>
                    <div className="social-media">
                        <a href="https://www.linkedin.com/in/premkumar-n-6698601b1" target="_blank" rel="noopener noreferrer"><img className="social-icon" src={process.env.PUBLIC_URL + "/img/linkedin.svg"} alt="" /></a>
                        <a href="https://twitter.com/premkumar_000" target="_blank" rel="noopener noreferrer"><img className="social-icon" src={process.env.PUBLIC_URL + "/img/twitter.svg"} alt="" /></a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img className="social-icon" src={process.env.PUBLIC_URL + "/img/facebook.svg"} alt="" /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img className="social-icon" src={process.env.PUBLIC_URL + "/img/instagram.svg"} alt="" /></a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About;
