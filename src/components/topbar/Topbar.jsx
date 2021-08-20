import "./topbar.scss"

import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

export default function Topbar() {
    return (
        <div className = "topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro"> 
                    <img src="assets/logo.png" alt="logo" className = "logo"/> 
                    </a>

                    <div className="itemContainer">
                        <PhoneIcon className = "icon"/>
                    <span>(734) 747-4331</span>
                    </div>

                    <div className="itemContainer">
                        <MailIcon className = "icon"/>
                        <span> 
                            <a href="mailto:acowlagi@sas.upenn.edu" >
                            acowlagi@sas.upenn.edu
                            </a>
                        </span>
                    
                    </div>
                </div>
                
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                    
                </div>           
            </div>               

        </div>
            
    )
}
