import { useState } from "react";
import { ImTv } from "react-icons/im";



function PlaceTiles(){
    return(
        <div className="ml-1 w-[19rem] h-[8rem] mb-6 bg-neutral-800 animate-pulse rounded-lg"></div>
    )
}

function EpisodesTiles({ item }){
    return(
        <div className="flex mb-6 h-[8rem] w-[21rem] fade-in">
            <img className="phone:h-[8rem] phone:min-w-[45%] object-cover rounded-md"  src={item.images.webp.image_url} alt="Episode Image" />
            <div className="max-w-[55%] text-text-pri font-playful m-2 ml-4">
                <h1 className=" line-clamp-2 laptop:text-xl">{item.title_english? item.title_english : item.title}</h1>
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


export default function NewEpisodes(props){
    const [place, setPlace] = useState(false)


    setTimeout(() => {
        setPlace(true)
    }, 1000);


    const NewEpiContent = Array.isArray(props.data)? props.data.map((item, id) => {
        if(id < 6){
            return <EpisodesTiles item = {item} key={id}/>
        }
        
    }) : null
    
    return(
        <div>
        <div className="ml-8 phone:my-14 minitab:my-28">
            <div className="flex space-x-3 my-5">
                <ImTv  className="phone:size-6 minitab:size-8 fill-text-pri"/>
                <h1 className="text-text-pri phone:text-xl minitab:text-3xl font-headings justify-center items-center">New Episodes</h1>
            </div>
            <h4 className="text-text-pri phone:text-xl font-headings">Today</h4>
            <hr className="w-7/8 my-3"/>
            <div className="phone:grid mt-10 mx-auto phone:mx-auto phone:grid-cols-1 minitab:grid-cols-2 laptop:grid-cols-3 pc:grid-cols-4"> 
                {Array.isArray(props.data)?
                (place? NewEpiContent : placeTilesSection) : null}
            </div>
        </div>
        <button className="bg-crimAccent flex items-center justify-center my-15 mx-auto text-vibeBlack font-headings phone:w-[20rem] minitab:w-[32rem] h-[3rem]">SHOW MORE</button>
        </div>
    )
}