import { useState } from "react";
import "./experience.scss"
import Parser from 'html-react-parser';

export default function Experience() {

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      year: "April 2021 - Present",
      title: "Undergraduate Researcher",
      location: "University of Pennsylvania",
      desc:
        "• Working on understanding deep network representations using techniques from statistical physics and information theory <br><br> • Characterizing the geometry of model manifolds to understand network overparameterization <br><br>  • Determining if data geometry induces capacity control in standard neural architectures to establish non-vacuous generalization bounds for sloppy models",
      img:
        "assets/inpca projection.png",
      skills: ["PyTorch", "Numpy", "Sklearn", "Seaborn", "TensorFlow"],
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      year: "April 2019 - November 2020",
      title: "Data Analyst",
      location: "University of Michigan",
      desc:
        "• Generalized line-detection algorithms, signal/image processing techniques to efficiently detect minor planets in tabular astrometric survey data using Python/MySQL. <br> <br> • Identified, catologged, and submitted detections of 500+ new objects and recovered 200+ previously discovered objects <br> <br> • University of Michigan Trans-Neptunian Object group member and collaborator on the DECam Ecliptic Exploration Project, supported by the NSF and NASA",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      skills: ["Pandas", "OpenCV", "MySQL", "SciPy", "AstroPy"]
    },
    {
      id: "3",
      icon: "./assets/globe.png",
      year: "January 2022 - Present",
      title: "Teaching Assistant",
      location: "University of Pennsylvania",
      desc:
        "•  Course: Data Structures & Algorithms; Course Size: 220+ <br> <br> • Roles/Responsibilities: Hold 1-hour weekly recitation section; Grade student assignments; Answer questions and provide debugging assistance through office hours; Develop course content (problem sets, recitation guides)",
      img:
        "assets/prims.png",
      skills: ["Java", "LaTeX", "Git"]
    },
  ];

  const [currentSlide, setCurrentSlide] = useState((data.length - 1) / 2);
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };



  return (
    <div className="experience" id="experience">
      <h1>Experience</h1>
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>

        {data.map(d => (<div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <span className="topLeftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h4>{d.year}</h4>
                </span>

                <div className="text">
                  <h2>{d.location} </h2>
                  <h3>{d.title}</h3>
                  <p>{Parser(d.desc)}</p>
                </div>

                <div className="labels">
                  <ul>
                    {d.skills.map((skill, subindex) => (
                      <li key={subindex}> {skill}</li>)
                    )}

                  </ul>
                </div>
              </div>
            </div>
            <div className="right">
              <img
                src={d.img}
                alt=""
              />
            </div>
          </div>
        </div>))}

      </div>
      
      <img src="assets/arrow.png"
          className={"arrow left " + (currentSlide <=0 && "inactive")} alt="leftarrow" onClick={() => {
        if (currentSlide > 0) {
          handleClick("left")
        }
      }} />
      <img src="assets/arrow.png" className={"arrow right " + (currentSlide >= data.length-1 && "inactive")} alt="rightarrow" onClick={() => {
        if (currentSlide < data.length - 1) {
          handleClick("right")
        }
      }} />
    </div>
  )
}
