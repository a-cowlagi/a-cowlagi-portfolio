import About from "./components/about/About";
import Awards from "./components/awards/Awards";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Topbar from "./components/topbar/Topbar";
import "./app.scss";
import { useState } from "react";
import 'animate.css';
import Menu from "./components/menu/Menu";
import ScrollAnimation from "react-animate-on-scroll";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
     <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
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
