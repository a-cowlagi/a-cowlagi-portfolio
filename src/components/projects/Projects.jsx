import Fade from 'react-reveal/Fade';
import "./projects.scss"
import "animate.css"

export default function Projects() {
    return (

            <Fade bottom>
            <div className = "projects" id = "projects">  
            
                <h1>Projects</h1>   
                <ul>
                    <li>All</li>
                    <li>Filter 1</li>
                    <li>Filter 2</li>
                    <li>Filter 3</li>
                    <li>Filter 4</li> 
                </ul>     

                
                    <div className="container">
                        <div className="item">
                            <img src="assets/project_placeholder.png" alt="" />
                            <h3>Project 1</h3>
                        </div>
                    </div>
                
                
            </div>
            </Fade>
            
        
    )
}
