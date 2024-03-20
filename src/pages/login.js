import React from "react";
import { useState } from "react";
import '../styles/signup.css';
import { LoginSignUp } from "../components/loginsignup";
import { useLocation } from "react-router-dom";
import axios from "axios";

export const Login = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    
    const handleSubmit = async (formData) => {
        try {
            await axios.post('http://127.0.0.1:8000/api/login/', formData,
            {headers: 
                {"Content-Type" : "application/json"},
            withCredentials: true},
            ).then((response) => console.log(response.data))
            
        } catch (error) {
            console.error(error)
        }
        
    }

    return(
        <div>
            <LoginSignUp onSubmit={handleSubmit} isLogin={isLoginPage}/>
        </div>
    )
}