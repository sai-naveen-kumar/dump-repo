import "./sections.css"
import Resume from "./resume"
import Work from "./work";
import Skills from "./skills";
function Sections(props) {
    return (
        <div onClick={props.hmClicked ? props.handleClick : undefined}>
            <Skills />
            <Resume />
            <Work />
        </div>
    );
}

export default Sections;
