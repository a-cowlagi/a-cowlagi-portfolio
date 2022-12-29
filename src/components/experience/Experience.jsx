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
        "• Exploring the geometry of deep network representations by leveraging techniques from statistical physics and information theory <br><br> • Developing model-agnostic approaches to select training examples that may accelerate and optimize training in the continual learning framework <br><br>  • Determine how training data structure induces capacity control in neural architectures; perform topology-preserving model reduction",
      img:
        "assets/inpca projection.png",
      img2:
        "assets/inpca projection2.png",
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
        "assets/lightcurve.png",
      img2:
        "assets/periodogram.png",
      skills: ["Pandas", "OpenCV", "MySQL", "SciPy", "AstroPy"]
    },
    {
      id: "3",
      icon: "./assets/globe.png",
      year: "January 2022 - Present",
      title: "Teaching Assistant",
      location: "University of Pennsylvania",
      desc:
        "•  Courses: Data Structures & Algorithms, Machine Learning; Course Sizes: 220+ <br><br> • Roles/Responsibilities: Developed course content on sublinear time graph algorithms (estimating connected components); Hold 1-hour weekly recitations; Grade student assignments; Answer questions and provide debugging assistance through office hours",
      img:
        "assets/prims.png",
      img2:
        "assets/hash.png",
      skills: ["Lambda", "Java", "Eclipse", "JUnit", "LaTeX", "Git"]
    },
    {
      id: "4",
      icon: "./assets/globe.png",
      year: "June 2019 - May 2020",
      title: "Research Assistant",
      location: "University of Pennsylvania",
      desc:
        "•  Developed Python tools to characterize the lattice connectivity of semiconductor networks using Python (NetworkX, OpenCV) <br> <br>• Applied image-processing techniques and elementary graph theory methods to automate connectively analysis of 1000+ SEM and TEM images",
      img:
        "assets/rawnetwork.png",
      img2:
        "assets/graphnetwork.png",
      skills: ["Python", "OpenCV", "Pandas", "NetworkX"]
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
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

              <img
                src={d.img2}
                alt=""
              />
            </div>
          </div>
        </div>))}

      </div>

      <img src="assets/arrow.png"
        className={"arrow left " + (currentSlide <= 0 && "inactive")} alt="leftarrow" onClick={() => {
          if (currentSlide > 0) {
            handleClick("left")
          }
        }} />
      <img src="assets/arrow.png" className={"arrow right " + (currentSlide >= data.length - 1 && "inactive")} alt="rightarrow" onClick={() => {
        if (currentSlide < data.length - 1) {
          handleClick("right")
        }
      }} />
    </div>
  )
}
