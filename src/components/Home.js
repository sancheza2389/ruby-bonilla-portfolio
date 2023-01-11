import DownloadButton from "./buttons/DownloadButton";
import ImageColumn from "../layout/ImageColumn";
import {motion} from "framer-motion";


function Home() {
    return (
        <motion.div exit={ {opacity: 0} } animate={ {opacity: 1} } initial={ {opacity: 0} } className="page__container">
            <ImageColumn />
            <div className="page--content home">
                <div className="header">
                    <div className="greeting">
                        <div className="pink-circle"></div>
                        <h2 className="heading heading-md">HELLO, THERE</h2>
                    </div>
                    <h1 className="heading heading-main">RUBY BONILLA</h1>
                    <h3 className="heading-gry">WRITER | CONSULTANT | PROJECT MANAGER</h3>
                    <DownloadButton />
                </div>
             </div>
        </motion.div>
    );
}

export default Home;