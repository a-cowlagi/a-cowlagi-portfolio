import Fade from 'react-reveal/Fade';
import "./projects.scss"
import "animate.css"
import PortfolioList from '../portfolioList/PortfolioList';
import { useEffect, useState } from 'react';
import { allProjects } from '../../Data';
import Parser from 'html-react-parser';

/*const openPDF = (title, URI) => () => {
    const pdfWindow = window.open("_blank");
    const html = `
      <html>
        <head>
          <title>${title}</title>
        </head>
        <body style="margin:0">
          <embed width="100%" height="100%" src=${URI} type="application/pdf">
        </body>
      </html>
    `;

    pdfWindow.document.write(html);
    pdfWindow.document.close();
    pdfWindow.history.pushState(null, null, URI);
};*/


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
            title: "Research",
        },
        {
            id: "filter 2",
            title: "Machine Learning & Data Science",
        },
        {
            id: "filter 3",
            title: "Software Tools",
        },
        {
            id: "filter 4",
            title: "Hardware",
        },

    ];

    useEffect(() => {
        var indexArr = [];
        var outProjects = [];
        switch (selected) {

            case "all":
                setData(allProjects);
                break;
            case "filter 1":
                {
                    indexArr = [0, 2, 3, 4, 5, 7, 8, 10, 11];
                    break;
                }
            case "filter 2":
                {
                    indexArr = [0, 2, 3, 5, 6, 8, 9];
                    break;
                }
            case "filter 3":
                {
                    indexArr = [2, 3, 5, 6];
                    break;
                }
            case "filter 4":
                {
                    indexArr = [1, 7, 10];
                    break;
                }
            default:
                setData(allProjects);
                break;
        }

        if (selected !== "all") {
            outProjects = indexArr.map(i => allProjects[i]);
            setData(outProjects);
        }


    }, [selected]);

    return (
        <Fade appear = {true} fraction = {0.05}>
            <div className="projects" id="projects">
                <div className="wrapper">
                    <h1>Projects</h1>
                    <ul>
                        {list.map((item) => (
                            <PortfolioList
                                title={item.title}
                                active={selected === item.id}
                                setSelected={setSelected}
                                id={item.id} />
                        ))}
                    </ul>

                    <div className="container">
                        {data.map(d => 
                            (<a className="item" href={d.link} target ="_blank" rel = "noopener noreferrer">
                            <img src={d.img} alt="" />

                            <div className="text">
                                <h3>{d.title}</h3>
                                <p>{Parser(d.text)}</p>
                            </div>

                        </a>)

                            /*if (d.pdf) {
                                return (<div className="item" href={d.link} onClick={openPDF(d.title, d.link)}>
                                    <img src={d.img} alt="" />

                                    <div className="text">
                                        <h3>{d.title}</h3>
                                        <p>{Parser(d.text)}</p>
                                    </div>

                                </div>)

                            } else {
                                return (<a className="item" href={d.link}>
                                    <img src={d.img} alt="" />

                                    <div className="text">
                                        <h3>{d.title}</h3>
                                        <p>{Parser(d.text)}</p>
                                    </div>

                                </a>)
                            }*/                       
                        )}
                    </div>
                </div>
                <div className="spacer"></div>
                <div className="arrow">
                    <a href="/#contact">
                        <img src="assets/down.png" alt="" />
                    </a>
                        </div>


            </div>
        </Fade>


    )
}
