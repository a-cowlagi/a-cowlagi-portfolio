import { useState } from "react";
import "./experience.scss"
import Parser from 'html-react-parser';

export default function Experience() {

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      year: "April 2020 - May 2021",
      title: "Undergraduate Researcher",
      location: "University of Pennsylvania",
      desc:
        "• Working on understanding deep network representations using techniques from statistical physics and information theory <br><br> • Characterizing the geometry of model manifolds to understand network overparameterization <br><br>  • Determining if data geometry induces capacity control in standard neural architectures",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      skills: ["Skill 1", "Skill 2", "Skill 3"],
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      year: "April 2020 - May 2021",
      title: "Mobile Application",
      location: "Google",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      skills: ["Skill 3", "Skill 4", "Skill 5"]
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      skills: ["Skill 1", "Skill 2", "Skill 3"]
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
      <img src={(currentSlide > 0) ? "assets/arrow.png" : ""} className="arrow left" alt="" onClick={() => {
        if (currentSlide > 0) {
          handleClick("left")
        }
      }} />
      <img src={(currentSlide < data.length - 1) ? "assets/arrow.png" : ""} className="arrow right" alt="" onClick={() => {
        if (currentSlide < data.length - 1) {
          handleClick("right")
        }
      }} />
    </div>
  )
}
