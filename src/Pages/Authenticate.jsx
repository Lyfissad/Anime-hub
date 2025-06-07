import { Outlet, Link } from "react-router-dom";
import authBackground from "../assets/authBackground.jpg"
import logo from "@/assets/icon-anime.svg";
import { useLocation } from "react-router-dom";


export default function Authenticate(){
    const location = useLocation();
    const loginMode = location.pathname.endsWith("/login");

    return(
        <div className="relative w-full h-screen flex items-center justify-center">
            <img src={authBackground} alt="background" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
            <div className="relative z-10 phone:max-w-[80%] minitab:min-w-100">
                <Link to={"/"}><img src={logo} alt="logo" className="size-40 mb-5 mx-auto"/></Link>
                <h1 className="text-text-pri text-3xl font-headings">{loginMode? "Welcome Back" : "Sign Up"}</h1>
                <div className="flex gap-4 justify-center items-center my-12">
                    <Link
                    to="login"
                    className={`h-10 phone:w-50 minitab:w-40 rounded-3xl text-center flex items-center justify-center transition-all duration-200
                    ${loginMode 
                    ? "bg-darkCrim text-white -translate-y-2 shadow-lg"
                    : "bg-vibeBlack text-text-pri hover:bg-crimAccent"}`}>
                    Log In
                    </Link>
                    <Link 
                    to="signup" 
                    className={`h-10 phone:w-50 minitab:w-40 rounded-3xl text-center flex items-center justify-center transition-all duration-200
                    ${loginMode 
                    ? "bg-vibeBlack text-text-pri hover:bg-crimAccent"
                    : "bg-darkCrim text-white -translate-y-2 shadow-lg"}`}>
                    Sign up
                    </Link>
                </div>
                <Outlet />
            </div>
        </div>
    )
}


