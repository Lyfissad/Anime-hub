import { useState, useEffect } from "react";
import { ImTv } from "react-icons/im";



function PlaceTiles(){
    return(
        <div className="w-[21rem] h-[7rem] bg-neutral-800 animate-pulse rounded-lg"></div>
    )
}

function EpisodesTiles({ item }){
    return(
        <div className="flex mb-6 w-[21rem]">
            <img className="h-[8rem] min-w-[45%] object-cover rounded-md"  src={item.images.webp.image_url} alt="Episode Image" />
            <div className="max-w-[55%] text-text-pri font-playful m-2 ml-4">
                <h1 className=" line-clamp-2">{item.title_english? item.title_english : item.title}</h1>
                <div className="text-text-mute text-sm mt-2">
                    <h4>Episode: {item.episodes}</h4>
                    <h4>Airing on: {item.broadcast.day}</h4>
                    <h4 className="text-crimAccent mt-2">{item.duration.split(" ").slice(0,1)+" "+item.duration.split(" ").slice(1,2)}s</h4>
                </div>
            </div>
        </div>
    ) 
}
//
const placeTilesSection = Array.from({length : 5}, (_, i) => <PlaceTiles key = {i}/> )


export default function NewEpisodes(){
    const [place, setPlace] = useState(false)
    const [newEpiData, setNewEpiData] = useState(null)
    const NewEpiURL = "https://api.jikan.moe/v4/seasons/now?limit=5"
    
        useEffect(()=>{
                setTimeout(()=>{
                    setPlace(true)
                    fetch(NewEpiURL)
                    .then(res => res.json())
                    .then(data => setNewEpiData(data.data))
                },1000)
            },[])

            console.log(newEpiData)

    const NewEpiContent = Array.isArray(newEpiData)? newEpiData.map((item, id) => {
        return <EpisodesTiles item = {item} key={id}/>
    }) : null
    
    return(

        <div className="ml-8 my-14">
            <div className="flex space-x-3 my-5">
                <ImTv  className="size-6 fill-text-pri"/>
                <h1 className="text-text-pri text-xl font-headings justify-center items-center">New Episodes</h1>
            </div>
            <h4 className="text-text-pri text-xl font-headings">Today</h4>
            <hr className="w-7/8 my-3"/>
            <div className="space-y-3"> 
                {Array.isArray(newEpiData)?
                (place? NewEpiContent : placeTilesSection) : null}
            </div>
            <button className="bg-crimAccent text-vibeBlack font-headings w-[21rem] h-[3rem]">SHOW MORE</button>
        </div>
    )
}