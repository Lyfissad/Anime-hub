import { useEffect, useState } from "react";
import { ImTv } from "react-icons/im";
import { gql, useQuery } from "@apollo/client";


{/*PlaceHolder tile components done seperately*/}
function PlaceTiles(){
    return(
        <div className="ml-1 w-[19rem] h-[8rem] mb-6 bg-neutral-800 animate-pulse rounded-lg"></div>
    )
}


const newEpisodes = gql`
        query{
        Page(page: 1, perPage: 8){
            media(
            type: ANIME
            status: RELEASING
            season: SPRING
            seasonYear : 2025
            ){
            id
            title{
                romaji
                english
                native
            }
            coverImage{
                large
                extraLarge
            }
            duration
            nextAiringEpisode{
                episode
                airingAt
            }
            }
        }
        }
`


function EpisodesTiles({ item }){

    return(
        <div className="flex mb-6 h-[8rem] w-[21rem] fade-in">
            <img className="phone:h-[8rem] phone:min-w-[45%] object-cover rounded-md"  src={item.coverImage.extraLarge} alt="Episode Image" />
            <div className="max-w-[55%] text-text-pri font-playful ml-4">
                <h1 className=" line-clamp-2 laptop:text-xl">{item.title.english || item.title.romaji || item.title.native}</h1>
                <div className="text-text-mute text-xs mt-2">
                    <h4>Episode: {item.nextAiringEpisode?.episode}</h4>
                    <h4>Airing on: {item.nextAiringEpisode?.airingAt? new Date(item.nextAiringEpisode?.airingAt * 1000).toLocaleString() : null}</h4>
                    <h4 className="text-crimAccent mt-2">{item.duration} mins</h4>
                </div>
            </div>
        </div>
    ) 
}
{/*creating placeholders*/}
const placeTilesSection = Array.from({length : 5}, (_, i) => <PlaceTiles key = {i}/> )


export default function NewEpisodes(){
    const [place, setPlace] = useState(false)
    const [newEpiData ,setNewEpiData] = useState(null)
    const {data, loading, error} = useQuery(newEpisodes, {fetchPolicy: 'network-only'})
     

    if(error){
        console.log("Error occurred: ", error)
    }

    if(data){
        console.log(data)
    }


    

    useEffect(() => {
        if (!loading && data) {
            setNewEpiData(data.Page.media);
            setPlace(true);
        }
        }, [loading, data]);


    const NewEpiContent = Array.isArray(newEpiData)? newEpiData.map((item, id) => {
            return <EpisodesTiles item = {item} key={id}/>
        }
        
    ) : null
    
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
                {Array.isArray(newEpiData)?
                (place && NewEpiContent? NewEpiContent : placeTilesSection) : null}
            </div>
        </div>
        <button className="bg-crimAccent flex items-center justify-center my-15 mx-auto text-vibeBlack font-headings phone:w-[20rem] minitab:w-[32rem] h-[3rem]">SHOW MORE</button>
        </div>
    )
}