import ContactForm from "./ContactForm.tsx";
import ImageColumn from "../layout/ImageColumn";
import PageHeading from "./PageHeading";
//import ContactCards from "./ContactCards";
import {motion} from "framer-motion";


function Contact() {
    return(
        <motion.div exit={ {opacity: 0} } animate={ {opacity: 1} } initial={ {opacity: 0} } className="page__container">
        <ImageColumn />
        <div className="page--content">
            <div className="contact">
                <PageHeading />
                <ContactForm />
            </div>
        </div>
    </motion.div>
    );
}

export default Contact;