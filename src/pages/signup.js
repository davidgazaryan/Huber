import React from "react";
import { useState } from "react";
import '../styles/signup.css';
import { FaUser,FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SignUp = () => {
    const [isLoading, setIsLoading] = useState(false);


    return(
        <div className="main-login">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="email" placeholder="Email.." required/>
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password.." required/>
                    <FaLock className="icon"/>
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Already have an account? <Link to="/login">Sign In</Link></p>
                </div>
            </form>
        </div>
    )
}