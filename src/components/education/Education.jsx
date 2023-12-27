import "./education.scss"

export default function Education() {
    const data = [
        {
            id: 1,
            year: "2020-2024",
            label: "Electrical Engineering",
            university: "University of Pennsylvania, School of Engineering & Applied Science",
            major:
                "B.S.E. in Electrical Engineering",
            img: "assets/integratedcircuit.jpg",
            desc:
                "Minor(s): Computer Science, Data Science",
            link: "https://www.ese.upenn.edu/",
        },

        {
            id: 2,
            year: "2022-2024",
            university: "University of Pennsylvania, School of Engineering & Applied Science",
            label: "Robotics",
            major:
                "M.S.E. in Robotics",
            desc:
                "Accelerated Masters Program. Pursuing coursework in the AI/ML Concentration.",
            img: "assets/robot.png",
            link: "https://www.grasp.upenn.edu/academics/masters-degree-program/curriculum-information/",
            featured: true
        },
        {
            id: 3,
            year: "2020-2024",
            university: "University of Pennsylvania, School of Arts & Science",
            label: "Physics",
            major:
                "B.A. in Physics",
            icon: "assets/twitter.png",
            desc:
                "Concentration: Computer Techniques, Minor(s): Math",
            img: "assets/cern.jpg",
            link: "https://www.physics.upenn.edu/"
        },
    ];

    return (
        <div className="education" id="education">
            <h1>Education</h1>
            <div className="container">
                {data.map((d) => (
                    <div className={d.featured ? "card featured" : "card"}>
                        <a href={d.link}>
                            <img src={d.img} alt="img" />
                        </a>

                        <div className="text">
                            <div className="year">
                                {d.year}
                            </div>
                            <div className="university">
                                {d.university}
                            </div>
                            <div className="desc">
                                <h3>{d.major}</h3>
                                <h4>{d.desc}</h4>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}
