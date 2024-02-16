import React from "react";
import { useState } from "react";
import {FaUser,FaLock} from "react-icons/fa"
import '../styles/login.css';
import { Link } from "react-router-dom";

export const Login = () => {
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
                    <p>Don't have an account? <Link to='/signup'>Register</Link></p>
                </div>
            </form>
        </div>
    )
}