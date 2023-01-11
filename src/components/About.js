import ExperienceTable from "./ExperienceTable";
import ImageColumn from "../layout/ImageColumn";
import PageHeading from "./PageHeading";
import WhatIDo from "./WhatIDo";
import {motion} from "framer-motion";



function About() {
    return(
        <motion.div exit={ {opacity: 0} } animate={ {opacity: 1} } initial={ {opacity: 0} } className="page__container">
            <ImageColumn />
            <div className="page--content">
                <div className="about">
                    <PageHeading />
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, ad pro nihil fastidii. Menandri legendos pri an, aperiam vivendo mea eu. 
                        Ut feugiat feugait moderatius vis, ne mel reque omnes voluptua. Facete officiis expetenda nec id, elit elaboraret ea mea.
                    </p>
                    <p className="paragraph">
                        Ad tempor moderatius duo. Te saperet prodesset gloriatur sit, his meliore elaboraret no. Usu ne causae regione. 
                        Mea te vocent apeirian, paulo vocent labitur sea an. Te tacimates adolescens vituperata usu, et mundi nostro ornatus has. 
                        Vis in corpora dissentias, no illud efficiantur quo.
                    </p>
                    <WhatIDo />
                    <ExperienceTable />
                </div>
            </div>
        </motion.div>
    );
}

export default About;