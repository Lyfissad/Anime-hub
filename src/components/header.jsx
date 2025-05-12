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
import { ImTv } from "react-icons/im";




  


export default function Header(){
    const [searchActive,setSearchActive] = useState(false)
    return(
        <div className="flex bg-grayish h-16 p-4 w-full">
            <Drawer className = "xs:visible md:invisible">
            <DrawerTrigger><SlMenu className = "fill-amberAccent size-8"/></DrawerTrigger>
            <DrawerContent className="h-[70%] bg-black">
                <ul className="space-y-4 text-xl ml-12 mt-4">
                    <li className="text-white">New</li>
                    <li className="text-white">Popular</li>
                    <li className="text-white">browse all</li>
                </ul>
            </DrawerContent>
            </Drawer>
            <a href="https://anime-hub-ebon.vercel.app/" className="cursor-pointer ml-5 relative">
                <ImTv className="fill-amberAccent size-8 items-center" />
            </a>
            <input type="text" placeholder="Search" className={`ml-auto border-2 border-gray-300 outline-none
                 active:border-amberAccent transition-all duration-300 ease-in-out focus:border-gray-500 rounded-sm p-3 ${searchActive? 'text-white opacity-100 w-2/4': 'w-0 overflow-hidden opacity-0'}`}/>
            <IoMdSearch className="size-9 fill-amberAccent ml-2 justify-center cursor-pointer" onClick={()=>setSearchActive(!searchActive)}/>
        </div>
    )
}