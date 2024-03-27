import React, { createContext } from "react";
import { useState } from "react";

const AuthContext = createContext();

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