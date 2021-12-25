import Topbar from "./components/topbar/Topbar";
import "./app.scss";
import { useState } from "react";
import 'animate.css';
import Menu from "./components/menu/Menu";
import Landing from "./components/landingPage/Landing";
import Resume from "./components/resume/Resume";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
     
     <BrowserRouter>
     <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
     <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/> 
      <Routes>      
        <Route path="/" element={<Landing/>} />
        <Route path="resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>

    </div>
    
  );
}
export default App;
