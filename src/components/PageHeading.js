import { useLocation } from "react-router-dom";

function PageHeading(){
    const path = useLocation().pathname;
    const location = path.split("/")[1];

    return(
        <div className="heading-container page--heading">
            <h1 className="heading heading-lrg">
                { 
                    location === "about" ? "ABOUT ME"
                :
                    location === "projects" ? "MY PROJECTS"
                :
                    "CONTACT" 
                }
            </h1>
            <div className="heading-underline_container">
                <div className="heading-underline"></div>
            </div>
        </div>
    );

}

export default PageHeading;