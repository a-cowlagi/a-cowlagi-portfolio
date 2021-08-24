import ScrollAnimation from "react-animate-on-scroll"
import "./about.scss"


export default function About() {
    return (
        
        <div className = "about" id = "about">
               
            <div className="leftpad"></div>
            <div className="left">
                    <div className="imgContainer">
                            <img src="assets/profile3.png" alt="" />
                        
                        </div>
            </div>

            <div className="right">
                <div className="wrapper">
                    <h1>About Me</h1>
                </div>
            </div>

        </div>
    )
}
