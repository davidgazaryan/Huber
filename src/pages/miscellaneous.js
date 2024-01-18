import React from "react";
import { useState, useEffect } from "react";
import '../styles/miscellaneous.css';

export const Miscellaneous = () => {

    const [width,setWidth] = useState(window.innerWidth);

    useEffect (() => {
        const WidthAdjuster = () =>{
            setWidth(window.innerWidth)
        };
        
        window.addEventListener('resize',WidthAdjuster);

        return () => window.removeEventListener('resize',WidthAdjuster);

    },[])

    return (
        <div className="main">
            <div className="notary">
                <p>
                    As a certified notary public, we provide a range of document authentication services with precision and professionalism. Whether 
                    you're finalizing legal documents, real estate transactions, or other critical paperwork, we ensure the integrity and legality of 
                    your agreements. Our commitment is to make the notarization process convenient and efficient, offering a reliable and confidential service. 
                    Trust your very own for all your notarial needs, where accuracy and integrity come standard.
                </p>
            </div>
            <div className="interpreter">
                <p>
                    As a dedicated interpreter, I bring linguistic expertise to facilitate seamless communication across diverse cultures and languages. 
                    Whether you're navigating business negotiations, legal proceedings, healthcare appointments, or any other scenario, I provide clear 
                    and accurate interpretation to ensure effective communication. 
                </p>
            </div>
            <div className="contactcontainer">
                <div>
                    <h3>Contact Me {width > 840 ? <span aria-label="" role='img'>&#x1F449;</span> : <span role='img' aria-label="">&#x1F447;</span>}</h3>
                </div>
                <div>
                    <a className="linkedina" href="https://www.linkedin.com/in/david-gazaryan-a7591217b" target="_blank" rel="noopener noreferrer">LinkedIn</a>    
                    <a href="mailto:holyor87@gmail.com" target="_blank" rel="noopener noreferrer">holyor87@gmail.com</a>
                </div>
                
            </div>
        </div>
    )
}