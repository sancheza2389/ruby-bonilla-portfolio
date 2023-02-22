//import ExperienceTable from "./ExperienceTable";
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
                    <p className="paragraph">Meet Ruby, a versatile and dedicated tech professional with a background in project management, copywriting, and consulting. With several years of experience in her field, Ruby has a history of effectively completing projects on time and within budget. Click here to view her most recent success stories.</p>
                    <p className="paragraph">Beyond her professional acumen, Ruby believes in providing equal opportunities to underrepresented and under-served groups - particularly mothers, veterans, and school teachers looking to transition into a tech role. She believes that everyone should have the chance to pursue a career in technology if they so choose, and volunteers her time to provide training and mentorship to bridge the gap for individuals within these groups.</p>
                    <p className="paragraph">Ruby dedicates her time to mentorship and to providing individuals with the skills and support they need to transition into a new career in the tech industry. She also believes that school teachers have the knowledge and skills to be particularly successful and project management, and is committed to providing the resources they need to make the transition.</p>
                    <p className="paragraph">With her strong leadership skills, technical expertise, and commitment to helping others succeed, Ruby is a valuable asset to any team. If you're looking for a skilled and dedicated project manager, copywriter, or consultant who is also committed to creating opportunities for underrepresented groups, look no further.</p>
                    <WhatIDo />
                </div>
            </div>
        </motion.div>
    );
}

export default About;