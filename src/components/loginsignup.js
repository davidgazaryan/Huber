import React from "react";
import { useState } from "react";
import {FaUser,FaLock} from "react-icons/fa";
import { Link } from "react-router-dom";

export const LoginSignUp = ({onSubmit, isLogin}) => {

    const [form,setForm] = useState({
        username:'',
        email:'',
        password:''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        if (name === 'email') {
            // If the changed field is 'email', update both 'email' and 'username' fields
            setForm(prevForm => ({
                ...prevForm,
                [name]: value,
                username: value // Set username to the email value
            }));
        }
        else {
            setForm({...form, [name] : value})
        }
    };
        

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
        // Optionally, you can clear the form fields after submission
        setForm({ username: '', email: '', password: '' });
      };

    return(
        <div className="main-login">
            <form action="">
                {isLogin ? <h1> Login </h1> : <h1>SignUp</h1>}
                <div className="input-box">
                    <input onChange={handleChange} type="email" id="email" name="email" placeholder="Email.." required/>
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input onChange={handleChange} type="password" id="password" name='password' placeholder="Password.." required/>
                    <FaLock className="icon"/>
                </div>
                <button onClick={handleSubmit} type="submit">Login</button>
                <div className="register-link">
                    {isLogin? <p>Don't have an account? <Link to='/signup'>Register</Link></p> : <p>Already have an account? <Link to='/login'>Login</Link></p>}
                </div>
            </form>
        </div>
    )

};