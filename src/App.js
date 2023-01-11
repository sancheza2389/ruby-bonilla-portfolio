import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import {AnimatePresence} from "framer-motion";
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './components/PrivacyPolicy';


function App() {
  return (
    <div className="App">
      <Header />
      <AnimatePresence>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="about" element={ <About/> } />
          <Route path="projects" element={ <Projects/> } />
          <Route path="contact" element={ <Contact/> } />
          <Route path="privacyPolicy" element={ <PrivacyPolicy/> } />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
