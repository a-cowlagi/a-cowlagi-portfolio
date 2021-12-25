import Topbar from "./components/topbar/Topbar";
import "./app.scss";
import { useState } from "react";
import 'animate.css';
import Menu from "./components/menu/Menu";
import Landing from "./components/landingPage/Landing";
import Resume from "./components/resume/Resume";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
     
     <BrowserRouter>
     <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
     <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/> 
      <Routes>      
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/#intro" element={<Intro />} />
        <Route exact path="/#about" element={<About />} />
        <Route exact path="/#experience" element={<Experience />} />
        <Route exact path="/#projects" element={<Projects />} />
        <Route exact path="/#contact" element={<Contact />} />
        <Route exact path="/" element={<Landing/>} />
      </Routes>
    </BrowserRouter>

    </div>
    
  );
}
export default App;
