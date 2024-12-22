import { Children, createContext, useState } from "react";

export const userContext = createContext(null);
export default function UserProvider({children}){
    const[token , setToken] = useState(localStorage.getItem("token"));
    console.log(token)
   
    return <userContext.Provider value={{token, setToken}} >
        {children}
    </userContext.Provider>
}