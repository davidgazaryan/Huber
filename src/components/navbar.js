import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';
import { IoReorderTwoOutline } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import Logout from './logout';
import useAuthContext from '../hooks/useAuthcontext';



function NavBar(){
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeNavbar, setActiveNavbar] = useState(false);
    const location = useLocation();
    const {user} = useAuthContext();
    console.log("user state is",user)

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
                    {user != null ? (
                        <>
                        <button>{user}</button>
                        <li><Logout/></li>
                        </>
                    ) :
                    (
                        <>
                        <Link to='/login'>Login</Link>
                        <Link to='/signup'>SignUp</Link>
                        </>
                    )}
                </ul>

            </div>
        </div>
    )
}

export default NavBar;