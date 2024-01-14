import React from "react";
import photo1 from '../photos/photo1.jpg';
import '../styles/home.css'
import { Link } from "react-router-dom";

export const Home = () => {
    return(
        <div className="home">
            <div className="homecontainer">
                <div className="containerleft">
                    <button>
                        <Link to='/services'>Services</Link>
                    </button>
                </div>
                <img src={photo1}></img>
            </div>
        </div>
        
    )
}