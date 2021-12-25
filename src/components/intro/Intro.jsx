import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef  = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, 
            backDelay: 1500,
            backSpeed: 60,
            typeSpeed: 100,
            strings: ['student.','programmer.', 'researcher.', 'electrical engineer.',
            'researcher.'] })
    }, [])
    return (
        <div className = "intro" id = "intro">   
            <div className="left">
                    <div className="imgContainer">
                    <img src="assets/testlogo_shadow.png" alt="" />
                    </div>
            </div>

            <div className="right">
                <div className="wrapper">
                    <h2>Hi! I'm</h2>
                    <h1>Anirudh Cowlagi</h1>
                    <h3>and I'm a <span ref = {textRef}></span> </h3>
                </div>

                <a href="#about">
                    <img src="assets/down.png" alt="" />
                
                 </a>
            </div> 
              



        </div>
    )
}
