import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar(){
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