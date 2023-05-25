import Navbar from "./Navbar";
import "./NavbarStyles.css"

function Header(props) {
    return (
        <>
            <header>
                <Navbar hmClicked={props.hmClicked} handleClick={props.handleClick} />
            </header>
        </>
    );
}

export default Header;
