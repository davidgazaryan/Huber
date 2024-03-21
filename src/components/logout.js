import React, { useContext } from 'react';
import useAuthContext from '../hooks/useAuthcontext';

const Logout = () => {
  const { setUser } = useAuthContext();

  const handleLogout = () => {
    setUser(null); // Set isLoggedIn back to null on logout
  };

  return (
    <button onClick={handleLogout}>LogOut</button>
  );
};

export default Logout;