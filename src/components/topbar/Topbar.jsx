import "./topbar.scss"

import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className = {"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro"> 
                    <img src= {!menuOpen ? "assets/logo.png" : "assets/logoalt2.png"} alt="logo" className = "logo"/> 
                    </a>

                    <div className="itemContainer">
                        <a href="tel:+7347474331"> 
                            <PhoneIcon className = "icon"/>
                        </a>
                        
                        <span> 
                            <a href="tel:+7347474331"> (734) 747-4331 </a>
                         </span>
                    </div>
                    
                    <div className="itemContainer">
                        <a href="mailto:acowlagi@sas.upenn.edu"> 
                            <MailIcon className = "icon"/>
                        </a>
                        
                        <span> 
                            <a href="mailto:acowlagi@sas.upenn.edu">  acowlagi@sas.upenn.edu
                            </a>
                         </span>
                    </div>

                </div>
                
                <div className="right">
                    <div className="hamburger" onClick ={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                    
                </div>           
            </div>               

        </div>
            
    )
}
