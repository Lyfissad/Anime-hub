import {
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
  } from "@/components/ui/carousel"
  import { FaCirclePlay } from "react-icons/fa6";
  import { IoPlayOutline } from "react-icons/io5";





const Content = (props) => {

const tiles = Array.isArray(props.data)
    ? props.data.map((item, index) => (
        <CarouselItem key={index} className="w-full">
            <div className="relative min-h-[45rem] object-cover items-center justify-center w-full overflow-hidden">
                <img
                className="w-full h-[35rem] object-cover filter contrast-110 saturate-150"
                src={item.images.jpg.large_image_url}
                alt={item.title}
                />
                <div
                    className="absolute top-0 left-0 w-full h-[78%] bg-gradient-to-b"
                    style={{
                    background: 'linear-gradient(to bottom, transparent 85%, #000000 100%)',
                    opacity: 1
                    }}
                ></div>
                <div className="phone:bg-crimAccent w-full h-8 absolute flex items-center space-x-20 justify-center px-4">
                    <p className='text-crimAccent font-playful text-vibeBlack italic'>{item.rating.split(" ")[0]}</p>
                    <p className='text-crimAccent font-playful text-vibeBlack ml-5'>Rating: {item.score}</p>
                </div>
                <button className="w-80 h-10 flex items-center justify-center
                 relative top-12 text-md bg-crimAccent border-4 border-vibeBlack
                  font-headings rounded-md text-vibeBlack mx-auto gap-2">
                    <IoPlayOutline className="size-7 fill-vibeBlack"/>START WATCHING
                </button>
            </div>
        </CarouselItem>
        ))
    : null;



    return(
        <div>
        <CarouselContent className="fade-in min-h-5/6">
                {tiles}
        </CarouselContent>
                <div className="flex justify-between items-center w-full">
        <CarouselPrevious className="bg-white text-black fade-in hover:bg-gray-200 rounded-full phone:invisible md:visible shadow-md ml-20 mr-auto" />
        <CarouselNext className="bg-white text-black fade-in hover:bg-gray-200 rounded-full phone:invisible md:visible shadow-md ml-auto mr-20" />
        </div>
        </div>
    )
}


export default Content
 