import Fade from 'react-reveal/Fade';
import "./about.scss"
import ButtonAnimated from './ButtonAnimated';


export default function About() {
    return (
        <Fade appear = {true} fraction = {0.1}>
            <div className="about" id="about">
                <div className="leftpad"></div>
                <div className="left">
                    <div className="imgContainer">
                        <img src="assets/profile4.png" alt="" />

                    </div>
                </div>

                <div className="right">
                    <div className="wrapper">
                        <h1>About Me</h1>
                        <div className="description">
                            <p>I am a student at the University of Pennsylvania in the <a href="https://www.viper.upenn.edu/">Vagelos Integrated Progam in Energy Research</a> and an incoming quantitative researcher at <a href="https://www.citadel.com/what-we-do/global-quantitative-strategies/"> Citadel</a>. I love working on projects that tackle tough questions — the answers are most satisfying!</p>
                            <br />
                            <p>I have interests in a range of topics including quantitative finance, deep learning, control & optimization, data visualization, statistical physics, embedded systems, and information theory.</p>
                            <br />
                            <p>In my free time, I'm usually going down <a href="https://www.youtube.com/watch?v=-yrZpTHBEss">YouTube rabbitholes</a>, <a href="https://www.youtube.com/watch?v=y4KK8qvrqrE">watching sports</a>, or reading <a href="https://towardsdatascience.com/a-comprehensive-overview-of-gaussian-splatting-e7d570081362">cool stuff</a> other people are thinking about!</p>
                            <br />

                        </div>

                        <ul>
                            <li><span>Location:</span> Philadelphia, PA</li>
                            <li><span>Email:</span> <a href="mailto:acowlagi@seas.upenn.edu">  acowlagi@seas.upenn.edu
                            </a></li>
                            <li><span>Cell:</span><a href="tel:+7347474331"> (734) 747-4331 </a></li>
                        </ul>

                        <div className="buttons">
                            <ButtonAnimated></ButtonAnimated>
                        </div>
                    </div>
                </div>

            </div>
        </Fade>

    )
}
