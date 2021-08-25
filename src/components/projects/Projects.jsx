import Fade from 'react-reveal/Fade';
import "./projects.scss"
import "animate.css"
import PortfolioList from '../portfolioList/PortfolioList';
import { useEffect, useState } from 'react';
import { allProjects } from '../../Data';

export default function Projects() {
    const [selected, setSelected] = useState("all")
    const [data, setData] = useState([])
    
    const list = [
        {
            id: "all",
            title: "All",
          },
          {
            id: "filter 1",
            title: "Filter 1",
          },
          {
            id: "filter 2",
            title: "Filter 2",
          },
          {
            id: "filter 3",
            title: "Filter 3",
          },
          {
            id: "filter 4",
            title: "Filter 4",
          },

    ];

    useEffect(() => {
        var indexArr = [];
        var outProjects = [];

        switch(selected) {
            
            case "all":
                setData(allProjects);   
                break;
            case "filter 1":
                {
                indexArr = [0,2];     
                break;
                }
            case "filter 2":
                {
                indexArr = [0,1,2];
                break;
                }
            case "filter 3":
                {
                indexArr = [1,2,3];
                break;
                }
            case "filter 4":
                {
                indexArr = [4,5];
                break;
                }
            default:
                setData(allProjects);
        }

        if (selected !== "all"){
            outProjects = indexArr.map(i => allProjects[i]);
            setData(outProjects);
        }
        
        
    }, [selected]);

    return (

            <Fade bottom>
            <div className = "projects" id = "projects">  
                <div className="wrapper">
                <h1>Projects</h1>   
                <ul>
                    {list.map((item) => (
                       <PortfolioList 
                       title = {item.title} 
                       active = {selected === item.id} 
                       setSelected = {setSelected}
                       id = {item.id}/>
                    ))}
                </ul>     

                
                    <div className="container">

                        {data.map(d=> (
                            <div className="item">
                            <img src={d.img} alt="" />
                            <h3>{d.title}</h3>
                            </div>
                        )
                        )}
                
                    </div>
                </div>
                <div className="spacer"></div>
                <div className="arrow"> 
                    <a href="#contact">
                        <img src="assets/down.png" alt="" />
                    
                    </a> 
                </div>
                  
                            
            </div>
            </Fade>
            
        
    )
}
