import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';
import { IoReorderTwoOutline } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";




function NavBar(){
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeNavbar, setActiveNavbar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setActiveNavbar(false);
        setIsExpanded(false);
    },[location])

    const toggleNavBar = () => {
        setIsExpanded((prev) => !prev)
        setActiveNavbar((prev) => !prev)
    };


    return(
        <div className={`navbar ${activeNavbar ? 'expanded' : ''} `}>
            <div className='toggleButton'>
                <button onClick={toggleNavBar}>{isExpanded ? <IoIosCloseCircle/> : <IoReorderTwoOutline/>}</button>
            </div>
            <div className='links'>
                <h3>
                    <Link to="/">Home</Link>
                </h3>
                <ul>
                    <Link to='/about'>About</Link>
                    <Link to='/reviews'>Reviews</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/miscellaneous'>Miscellaneous</Link>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;