import React from "react"
import "../styles/about.css"
import photo2 from '../photos/photo2.jpg';

export const About = () => {
    return (
        <div className="about">
            <div className="aboutcontainer">
                <div className="leftcontainer">
                    <h3> Who I Am</h3>
                    <p> My name is Hola and I work as a driver, helping clients reach their destination in a timely fashion. I also do etc etc etc. </p>
                </div>
                <div className="rightcontainer">
                    <img src={photo2} alt=""></img>
                </div>

            </div>
        </div>
    )
}