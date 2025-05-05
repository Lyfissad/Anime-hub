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
import logo from '../assets/icon-anime.svg';




  


export default function Header(){
    const [searchActive,setSearchActive] = useState(false)
    return(
        <div className="flex bg-[#23252b] h-16 p-4 w-full">
            <Drawer className = "xs:visible md:invisible">
            <DrawerTrigger><SlMenu className = "fill-amber-50 size-8"/></DrawerTrigger>
            <DrawerContent className="h-[100%] bg-black">
                <ul className="space-y-4 text-xl ml-12 mt-4">
                    <li className="text-white">New</li>
                    <li className="text-white">Popular</li>
                    <li className="text-white">browse all</li>
                </ul>
            </DrawerContent>
            </Drawer>
            <img src={logo} className="size-8 ml-3" alt="logo" />
            <input type="text" placeholder="Search" className={`ml-auto border-2 border-gray-300 outline-none
                 active:border-gray-500 transition-all duration-300 ease-in-out focus:border-gray-500 rounded-sm p-3 ${searchActive? 'text-white opacity-100 w-2/4': 'w-0 overflow-hidden opacity-0'}`}/>
            <IoMdSearch className="size-9 fill-gray-300 ml-2 justify-center" onClick={()=>setSearchActive(!searchActive)}/>
        </div>
    )
}