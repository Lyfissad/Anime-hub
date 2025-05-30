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
import { StringCleanDescription } from "../BannerOverlay"
import TrailerButton from "../TrailerButton";
import { IoIosCloseCircle } from "react-icons/io";
import { SliceStingByWords } from "./topAnime";

  export default function AnimeInfoDrawer({ item }) {



  return (
    <>
      <DrawerHeader>
        <DrawerClose asChild>
            <IoIosCloseCircle 
            className="size-10 minitab:hover:-translate-y-1 transition-all duration-200 origin-center absolute top-0 right-0 m-5 cursor-pointer fill-crimAccent hover:fill-crimAccent/80 text-vibeBlack" />
        </DrawerClose>
        <img className="mt-8 rounded-sm object-cover max-h-[18rem]" src={item.bannerImage} alt="Cover" />
        <h2 className="font-bold text-text-pri text-xl minitab:text-3xl m-5">
          {item.title.english || item.title.romaji || item.title.native}
        </h2>
    </DrawerHeader>
        <DrawerDescription className="p-4 text-sm text-text-mute">
            {StringCleanDescription(SliceStingByWords(item.description || "No description", 60))}
        </DrawerDescription>
      <DrawerFooter>
        <div className="block space-y-2 text-vibeBlacks mx-3">
            <div className = "h-[3rem] w-full bg-crimAccent flex items-center justify-center cursor-pointer text-center rounded-lg">
            <TrailerButton trailer = {item.trailer} />
            </div>
            <button 
            onClick={()=>{alert("Not Implemented yet...")}}
            className = "h-[3rem] w-full cursor-pointer font-semibold rounded-lg bg-crimAccent">Watch Now</button>
        </div>
      </DrawerFooter>
    </>
  );
}
