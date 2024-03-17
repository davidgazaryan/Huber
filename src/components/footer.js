import React from "react";
import '../styles/footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='footer' >
            <div className="footlinks">
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/reviews'>Reviews</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/miscellaneous'>Miscellaneous</Link>
                    <Link to='/login'>Login</Link>
                </ul>
            </div>
            <p>Copyright &copy; 2024. All rights reserved.</p>
        </div>
    )
};

export default Footer