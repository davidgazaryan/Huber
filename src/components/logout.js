import React, { useContext } from 'react';
import useAuthContext from '../hooks/useAuthcontext';
import axios from 'axios';

const Logout = () => {
  const { setUser } = useAuthContext();

  const  handleLogout = async () => {
    try {
        await axios.post("https://localhost:8000/api/logout");
        setUser(null)
    }
    catch(error){
        console.log(error);
    }
     // Set isLoggedIn back to null on logout
  };

  return (
    <button onClick={handleLogout}>LogOut</button>
  );
};

export default Logout;