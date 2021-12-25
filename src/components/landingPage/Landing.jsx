import About from "../about/About"
import Contact from "../contact/Contact";
import Education from "../education/Education";
import Experience from "../experience/Experience";
import Intro from "../intro/Intro";
import Projects from "../projects/Projects";
import 'animate.css';
import "./landing.scss"



export default function Landing() {
  return (
    <div className="landing">
      <div className="sections">
        <Intro/>
        <About/>
        <Education/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </div>
    
  );
}