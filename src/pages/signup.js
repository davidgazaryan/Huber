import React from "react";
import { useState } from "react";
import '../styles/signup.css';
import { useLocation } from "react-router-dom";
import { LoginSignUp } from "../components/loginsignup";
import axios from "axios";
import useAuthContext from "../hooks/useAuthcontext";

export const SignUp = () => {
    
    const {setUser} = useAuthContext();

    const location = useLocation();
    const isLoginPage = location.pathname === '/login';

    const handleSubmit = async (formData) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/signup/', formData,
            {headers: 
                {"Content-Type" : "application/json"},
            withCredentials: true})

            if (response.status === 200){
                setUser(response.data.user.email);
            }
            
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