import { createContext, useState, useContext } from "react";


const AuthContext = createContext()



export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    function login({userData}){
        setUser(userData)
        localStorage.setItem("user", JSON.stringify(userData))
    }


    function logOut(){
        setUser(null);
        localStorage.removeItem("user");
    }


    return(

        <AuthContext.Provider value = { {user, login, logOut} }>
            {children}
        </AuthContext.Provider>
    )

}



export const useAuth = () => useContext(AuthContext);