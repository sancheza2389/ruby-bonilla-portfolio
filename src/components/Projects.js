import FilterTable from "./table/FilterTable";
import PageHeading from "./PageHeading";
import ImageColumn from "../layout/ImageColumn";
import {motion} from "framer-motion";



function Projects(props) {
    return(
        <motion.div exit={ {opacity: 0} } animate={ {opacity: 1} } initial={ {opacity: 0} } className="page__container">
            <ImageColumn />
            <div className="page--content">
                <PageHeading />
                <div className="projects">
                    <FilterTable />
                </div>
            </div>
        </motion.div>
    );
}


export default Projects;