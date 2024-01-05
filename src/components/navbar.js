import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar(){
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeNavbar, setActiveNavbar] = useState(false);

    // use location hook to expand, navbar


    return(
        <div className='navbar'>
            <div className='links'>
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Reviews</Link>
                <Link>Services</Link>
            </div>
        </div>
    )
}

export default NavBar;