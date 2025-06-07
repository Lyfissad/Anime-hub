import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Authenticate from "./Pages/Authenticate";


export default function App(){
	return(
		<>
		<ToastContainer />
		<Routes>
			<Route index element = {<Home />} />
			<Route path="/auth" element = {<Authenticate />}>
				<Route path="signup" element = {<SignUp />} />
				<Route path="login" element = {<Login />} />
			</Route>
		</Routes>
		</>
	)
}