import { SlMenu } from "react-icons/sl";
import { IoMdSearch } from "react-icons/io";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { useState } from "react";
import logo from "@/assets/icon-anime.svg"; 




  


export default function Header(){
    const [searchActive,setSearchActive] = useState(false)
    return(
        <div className="flex justify-center items-center bg-grayish h-13 p-4 w-full">
            <Drawer className = "xs:visible md:invisible">
            <DrawerTrigger><SlMenu className = "fill-crimAccent size-8"/></DrawerTrigger>
            <DrawerContent className="h-[70%] bg-black">
                <ul className="space-y-4 text-xl ml-12 mt-4">
                    <li className="text-white">New</li>
                    <li className="text-white">Popular</li>
                    <li className="text-white">browse all</li>
                </ul>
            </DrawerContent>
            </Drawer>
            <a href="https://anime-hub-ebon.vercel.app/" className="cursor-pointer ml-5 relative">
               <img src={logo} alt="logo" className="fill-crimAccent" /> 
            </a>
            <h1 className={`text-4xl font-logo flex justify-center items-center transition-all duration-200 w-50 font-extrabold ${searchActive? `` : `visible`}`}>
            <span className="text-vibeBlack">Anime</span>{" "}
            <span className="text-crimAccent">Hub</span>
            </h1>

            <input type="text" placeholder="Search" className={`ml-auto h-8 border-2 border-text-mute outline-none
                 active:border-crimAccent transition-all duration-300 ease-in-out focus:border-crimAccent rounded-sm p-3 ${searchActive? 'text-white opacity-100 w-2/4': 'w-0 overflow-hidden opacity-0'}`}/>
            <IoMdSearch className="size-9 fill-crimAccent ml-2 justify-center cursor-pointer" onClick={()=>setSearchActive(!searchActive)}/>
        </div>
    )
}


//<ImTv className="fill-crimAccent size-8 items-center" />