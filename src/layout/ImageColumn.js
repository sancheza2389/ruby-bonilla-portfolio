import { useLocation } from "react-router-dom";

function ImageColumn() {
    const path = useLocation().pathname;
    const location = path.split("/")[1];
    console.log(location);
    console.log("hi");



    return (
        <div className="imageColumn__container">
            <img src="#" alt="Ruby Bonilla" className={location === '' ? "home--image" : location + "--image"}/>
        </div>
    );
};

export default ImageColumn;