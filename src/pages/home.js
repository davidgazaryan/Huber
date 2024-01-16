import React from "react";
import photo1 from '../photos/photo1.jpg';
import photo2 from '../photos/photo2.jpg';
import '../styles/home.css'
import { Link } from "react-router-dom";

export const Home = () => {
    return(
        <div className="home">
            <div className="homecontainer">
                <div className="containerleft">
                    <h1>Ride with Ease, Arrive in Style</h1>
                    <p>
                    "Welcome to [Your Name]'s Personal Chauffeur Service, where convenience meets personalized transportation. 
                    We offer a unique ride-hailing experience designed for those who seek a reliable and exclusive journey. 
                    Enjoy the luxury of having your dedicated driver at your service, ensuring you arrive at your destination in comfort and style. 
                    Your safety and satisfaction are our top priorities as we redefine the way you travel. Elevate your commute with a touch of personalized service — 
                    because every journey deserves a dedicated chauffeur.
                    </p>
                    <button>
                        <Link to='/services'>Get Started</Link>
                    </button>
                </div>
                <div className="containerright">
                    <img src={photo1} alt=""></img>
                    <img src={photo2} alt=""></img>
                </div>
            </div>
        </div>
        
    )
}