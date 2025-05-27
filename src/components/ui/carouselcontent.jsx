import {
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
  } from "@/components/ui/carousel"
  import { FaCirclePlay } from "react-icons/fa6";
  import { IoPlayOutline } from "react-icons/io5";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";




const Content = () => {
    const [seasonalData, setSeasonalData] = useState(null)


    const seasonal = gql`
        query{
            Page(page: 1, perPage: 15){
                media(
                type: ANIME
                status: RELEASING
                sort : TRENDING_DESC
                seasonYear : 2025
                ){
                    id
                    coverImage{
                        extraLarge
                    }
                    title{
                        english
                        romaji
                        native
                    }
                    bannerImage
                    averageScore
                    trailer{
                        id
                        site
                    }
                }
                    
                
            }
        }
    `

    const {data, loading, error} = useQuery(seasonal)


    useEffect(()=>{
        if(error){
            console.error("Carousel content error:", error)
        }

        if(data && !loading){
            console.log(data)
            setSeasonalData(data.Page.media)
        }

    },[data, loading, error])

    

    const TrailerButton = ({ trailer }) => {
        const getTrailerURL = () => {
            if(!trailer) return null;

        switch(trailer?.site?.toLowerCase()){
            case "youtube":
                return `https://www.youtube.com/watch?v=${trailer.id}`;
            case "dailymotion":
                return `https://www.dailymotion.com/video/${trailer.id}`;
            default:
                return null;
        }
        }

        const trailerURL = getTrailerURL()
        
        return(
            <button  
            className='font-playful text-vibeBlack cursor-pointer font-extrabold'
             onClick={() => {
                if(trailerURL){
                    window.open(trailerURL, "_blank")
                }
                else{
                    alert("No trailer Available")
                }
            }}>{trailerURL? "Watch Trailer" : "No Trailers"}
            </button>
        );
    };


const tiles = Array.isArray(seasonalData)
    ? seasonalData.map((item) => (
        <CarouselItem key={item.id} className="w-full">
            <div className="relative phone:min-h-[45rem] minitab:h-[60rem] object-cover items-center justify-center w-full overflow-hidden">
                <img
                className="w-full phone:block phone:h-[35rem] minitab:h-[45rem] object-cover filter blur-xs contrast-110 saturate-150"
                src={item.coverImage.extraLarge}
                alt={item.title.english || item.title.romaji || item.title.native}
                />
                <div
                    className="absolute top-0 left-0 w-full phone:h-[78%] minitab:h-[93%] bg-gradient-to-b"
                    style={{
                    background: 'linear-gradient(to bottom, transparent 85%, #000000 100%)',
                    opacity: 1
                    }}
                ></div>
                <div className="phone:bg-crimAccent phone:block minitab:hidden w-full h-8 absolute flex items-center space-x-20 justify-center px-4">
                    <TrailerButton trailer={item.trailer}/>
                    <p className='text-crimAccent font-playful text-vibeBlack mr-8'>Rating: {item.averageScore}</p>
                </div>
                <button onClick={()=>{alert("Not implemented yet,Sorry.")}} className="phone:w-80 minitab:w-100 h-10 flex items-center justify-center
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
 