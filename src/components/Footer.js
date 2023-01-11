import { Link } from "react-router-dom";
import ToggleClass from "./Header";

function Footer() {

    return (
        <footer className="footer">
            <div className="footer--caption">
                <span>&copy; 2023 Alex Sanchez</span>
            </div>
            <div className="footer--siteMap">
                <Link to="/" className="footer--link" onClick={ToggleClass}>Home</Link>
                <Link to="about"className="footer--link"onClick={ToggleClass}>About</Link>
                <Link to="projects" className="footer--link" onClick={ToggleClass}>Projects</Link>
                <Link to="contact" className="footer--link" onClick={ToggleClass}>Contact Me</Link>
            </div>
        </footer>
    )

}

export default Footer;