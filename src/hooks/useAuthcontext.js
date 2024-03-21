import React, { useContext } from "react";
import { AuthContext } from "./Authcontext";


const useAuthContext = () => {
    const context = useContext(AuthContext)

    if (!context){
        throw Error("AuthContext should be used inside Authcontextprovider")
    }

    return context
};

export default useAuthContext;