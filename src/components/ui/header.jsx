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
                <ul className="space-y-4 text-xl ml-12 mt-4 text-text-pri font-playful">
                    <li className="">New</li>
                    <li className="">Popular</li>
                    <li className="">browse all</li>
                </ul>
            </DrawerContent>
            </Drawer>

            <a href="https://anime-hub-ebon.vercel.app/" className="cursor-pointer">
                <img src={logo} alt="logo" className="h-10 w-auto ml-2" />
            </a>
            
                    <a
                    href="/"
                    className={`flex items-center transition-all duration-300 transform origin-left ${
                    searchActive ? "opacity-0 scale-0" : "opacity-100 scale-100"
                    }`}
                >
                    <h1 className="text-3xl font-logo ml-2 font-extrabold">
                    <span className="text-vibeBlack">Anime</span>{" "}
                    <span className="text-crimAccent">Hub</span>
                    </h1>
                </a>

            <input type="text" placeholder="Search" className={`ml-auto h-8 border-2 border-text-mute outline-none
                 active:border-crimAccent transition-all duration-300 ease-in-out focus:border-crimAccent
                  rounded-sm p-3 ${searchActive? 'text-white opacity-100 w-1/2': 'w-0 overflow-hidden opacity-0'}`}/>

            <IoMdSearch className="size-9 fill-crimAccent ml-2 justify-center cursor-pointer" onClick={()=>setSearchActive(!searchActive)}/>
        </div>
    )
}


