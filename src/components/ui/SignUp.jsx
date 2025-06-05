import { useState } from "react"
import React from "react"



export default function SignUp() {
    const [signupData, setSignupData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        preferences: []
    })
    
    function handleChange(e){
        if(e.target.name === "preferences"){
            setSignupData({...signupData, preferences: e.target.value.split(",").map(p => p.trim())})
        }
        else{
            setSignupData({...signupData, [e.target.name]: e.target.value})
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        

        if (signupData.password !== signupData.confirmPassword)
            {
            alert("Passwords don't match!")
        }
            


        const res = await fetch("https://anime-hub-backend-ik8o.onrender.com/api/signup",{
            method: "POST",
            headers:{
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({
                ...signupData, preferences: signupData.preferences
            })
        });

        const data = await res.json()
        
        if(!res.ok){
            alert(data.message ||"Something went wrong...")
            setSignupData({
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
                preferences: []
            })
        }

        
        console.log(data)
        alert(data.message)
        setSignupData({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            preferences: []
        })
    }


    return (
        <form onSubmit = {handleSubmit} className="bg-text-pri text-vibeBlack grid grid-cols-1">
            <input name = "username" placeholder = "Username" onChange={handleChange} />
            <input name = "email" placeholder = "Email" onChange={handleChange} />
            <input type="password" name = "password" placeholder = "Password" onChange={handleChange} />
            <input type="password" name = "confirmPassword" placeholder = "Confirm Password" onChange={handleChange} />
            <input name = "preferences" placeholder = "Preferences" onChange={handleChange} />
            <button type = "submit">Sign Up</button>
        </form>
    )
}