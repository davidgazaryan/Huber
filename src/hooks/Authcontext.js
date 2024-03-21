import React from "react";
import { useState,useContext } from "react";

const AuthContext = useContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log("This is theuser state", user)

    return( 
    <AuthContext.Provider value={{user,setUser}} >
        {children}
    </AuthContext.Provider>
    )
}   

export {AuthContext,AuthProvider};