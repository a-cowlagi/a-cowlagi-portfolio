import About from "./components/about/About";
import Awards from "./components/awards/Awards";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Topbar from "./components/topbar/Topbar";
import "./app.scss"

function App() {
  return (
    <div className="app">
     <Topbar/>
      <div className="sections">
        <Intro/>
        <About/>
        <Education/>
        <Experience/>
        <Projects/>
        <Awards/>
        <Contact/>
      </div>

    </div>
    
  );
}

export default App;
