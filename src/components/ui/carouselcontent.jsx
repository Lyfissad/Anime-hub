import {
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
  } from "@/components/ui/carousel"
  import { IoPlayOutline } from "react-icons/io5";
import { gql, useSuspenseQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import BannerOverlay from "../BannerOverlay";
import TrailerButton from "../TrailerButton";

const Content = () => {
    const [seasonalData, setSeasonalData] = useState(null)

//fetching query for seasonal anime year 2025
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
                    description
                    trailer{
                        id
                        site
                    }
                }
                    
                
            }
        }
    `

    const {data} = useSuspenseQuery(seasonal,{fetchPolicy: "cache-first"})


    useEffect(()=>{

        if(data){
            console.log(data)
            setSeasonalData(data.Page.media)
        }

    },[data])

    

    




//mapping over seasonalData
const tiles = Array.isArray(seasonalData)
    ? seasonalData.map((item) => (
        <CarouselItem key={item.id} className="w-full">
            <div className="relative phone:min-h-[45rem] minitab:h-[60rem] object-cover 
                items-center justify-center w-full overflow-hidden">
                
                {/* Small screens */}
                <img
                    className="w-full phone:block minitab:hidden phone:h-[35rem] minitab:h-[45rem] object-cover
                    filter contrast-110 saturate-150"
                    src={item.coverImage.extraLarge}
                    alt={item.title.english || item.title.romaji || item.title.native}
                />

                {/* Larger screens with cropping */}
                <img
                    className="w-[140%] phone:hidden minitab:block phone:h-[35rem] minitab:h-[45rem] object-cover
                    object-center filter blur-xs contrast-110 saturate-150"
                    src={item.bannerImage ? item.bannerImage : item.coverImage.extraLarge}
                    alt={item.title.english || item.title.romaji || item.title.native}
                />
                <BannerOverlay
                    trailer = {item.trailer}
                    title = {item.title.english || item.title.romaji || item.title.native}
                    averageScore = {item.averageScore} 
                    description = {item.description}/>
                <div
                    className="absolute top-0 left-0 w-full phone:h-[78%] minitab:h-[76%] bg-gradient-to-b"
                    style={{
                    background: 'linear-gradient(to bottom, transparent 85%, #000000 100%)',
                    opacity: 1
                    }}
                ></div>
                <div className="phone:bg-crimAccent phone:block minitab:invisible 
                w-full h-8 absolute flex items-center space-x-20 justify-center px-4">
                    <TrailerButton trailer={item.trailer}/>
                    <div className='text-crimAccent flex items-center justify-center font-playful text-vibeBlack mr-8'>{<AiOutlineStar className="mr-1" />} { item.averageScore}</div>
                </div>
                <button onClick={()=>{alert("Not implemented yet,Sorry.")}} className="phone:w-80 minitab:invisible h-10 flex
                 items-center justify-center relative top-12 text-md bg-crimAccent border-4 border-vibeBlack
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
                {seasonalData? tiles : 
                <div className="flex justify-center items-center min-h-screen w-full h-full">
                    <AiOutlineLoading className='fill-crimAccent size-18 spinFast m-auto'/>
                </div>}
        </CarouselContent>
        <div className="flex cursor-pointer shadow-none outline-none bg-none border-none justify-between absolute bottom-150 items-center w-full">
        <CarouselPrevious className="bg-transparent text-black fade-in hover:bg-gray-200 phone:invisible minitab:visible  ml-20 mr-auto" />
        <CarouselNext className="bg-transparent text-black fade-in hover:bg-gray-200 phone:invisible minitab:visible shadow-md ml-auto mr-20" />
        </div>
        </div>
    )
}


export default Content
 