import { createContext, useState } from "react";


export const AuthContext = createContext()



export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
  const saved = localStorage.getItem("user");

  if (saved && saved !== "undefined") {
    try {
      return JSON.parse(saved);
    } catch (err) {
      console.error("Error parsing user from localStorage:", err);
      return null;
    }
  }
  return null;
});
    function login(userData){
        setUser(userData)
        localStorage.setItem("user", JSON.stringify(userData))
    }


    function logOut(){
        setUser(null);
        localStorage.removeItem("user");
    }


    return(

        <AuthContext.Provider value = {{user, login, logOut}}>
            {children}
        </AuthContext.Provider>
    )

}



