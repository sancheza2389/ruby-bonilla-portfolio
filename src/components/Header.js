import { Link } from "react-router-dom";
import {useState} from 'react';

function Header() {
    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
        setActive(!isActive);
    }

    return (
        <div className="nav__container">
            <div className={isActive ? "nav--menu" : "nav--menu__active"} id="navMenu">
                <Link to="/" className="nav--link" onClick={ToggleClass}>HOME</Link>
                <Link to="about"className="nav--link" onClick={ToggleClass}>ABOUT</Link>
                <Link to="projects" className="nav--link" onClick={ToggleClass}>PROJECTS</Link>
                {isActive ? 
                    <Link to="/" className="nav--link">RUBY</Link>
                :
                    <Link to="contact" className="nav--link" onClick={ToggleClass}>CONTACT ME</Link>
                }
            </div>
            <div className="nav--button__container" onClick={ToggleClass} id="navButton">
                <div className={isActive ? "nav--button" : "nav--button__active"} ></div>
            </div>
        </div>
    );
}

export default Header;