import { SlMenu } from "react-icons/sl";
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
  


export default function Header(){
    return(
        <div className="flex bg-red-950 h-16 p-4">
            <Drawer className = "xs:visible md:invisible">
            <DrawerTrigger><SlMenu className = "fill-amber-50 size-8"/></DrawerTrigger>
            <DrawerContent className="h-[60%]">
                <ul className="space-y-4">
                    <li>New</li>
                    <li>Popular</li>
                    <li>browse all</li>
                </ul>
            </DrawerContent>
            </Drawer>
            
        </div>
    )
}