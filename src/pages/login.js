import React from "react";
import { useState } from "react";
import '../styles/signup.css';
import { LoginSignUp } from "../components/loginsignup";
import { useLocation } from "react-router-dom";
import axios from "axios";
import useAuthContext from "../hooks/useAuthcontext";

export const Login = () => {

    const {setUser} = useAuthContext();

    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    
    const handleSubmit = async (formData) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', formData,
            {headers: 
                {"Content-Type" : "application/json"},
            withCredentials: true})
            
            console.log(response)

            if (response.status === 200 ) {
                console.log("Testing if correct response",response.data.user.email)
                setUser(response.data.user.email);
            }
            
        } catch (error) {
            console.error(error)
        }
        
    }

    return(
        <div>
            <LoginSignUp onSubmit={handleSubmit} isLogin={isLoginPage} />
        </div>
    )
}