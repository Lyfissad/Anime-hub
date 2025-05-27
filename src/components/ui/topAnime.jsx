import { useEffect, useRef, useState } from "react"
import { gql, useQuery } from "@apollo/client"



export default function TopAnime(){
    const [topData,setTopdata] = useState(null)
    const [place,setPlace] = useState(true)

    
    const getTop = gql`
            query{
                Page(page:1, perPage: 20){
                    media(type: ANIME, sort: SCORE_DESC){
                    id
                    title{
                                romaji
                                english
                                native
                            }
                    averageScore
                    status
                    coverImage{
                        large
                        extraLarge
                    }
                    genres
                    }
                }
            }
    `;



    const {data, loading, error} = useQuery(getTop, {fetchPolicy: 'network-only'})

    if(loading){
        console.log("Loading...")
    }


    if (error) {
        console.log("this shit didn't work bruv!!!:", error)
    }

        useEffect(() => {
    if (!loading && data) {
        setTopdata(data.Page.media);
        setPlace(false);
    }
    }, [loading, data]);



    {/*Entry logic for brightening*/}
    function Tiles ({item}){
        const [visible,setVisible] = useState(false)
        const ref = useRef()

        useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: [0.4, 0.6, 0.8] }
        )
        if(ref.current)observer.observe(ref.current)
            return  () => {
        if (ref.current) observer.unobserve(ref.current);
    };

    }, [])


    return(
        <div ref={ref} className={`mt-8 phone:min-w-[10rem] phone:h-[22rem] minitab:min-h-[30rem] overflow-visible minitab:min-w-[15rem] p-2 cursor-pointer
            transition-all transition-filter ease-in-out duration-300 ${visible ? "brightness-100 scale-103" : "brightness-50 scale-100"}`}>
            <img className="phone:h-60 minitab:h-80 w-full rounded-xl object-cover" src={item.coverImage.extraLarge} alt="Cover Picture" />
            <div className="flex flex-col min-h-[5rem] justify-between">
            <h3 className="text-text-pri mt-3 font-headings line-clamp-2 phone:text-sm minitab:text-base whitespace-pre-wrap">{item.title.english || item.title.romanji || item.title.native}</h3>
            <h4 className="text-text-mute pt-3 font-playful phone:text-xs minitab:text-sm whitespace-pre-line">{item.genres[0]}, {item.genres[1]}</h4>
            </div>
        </div>
    )
    }


    {/*Mapping over Tile component*/}
    const topContent = Array.isArray(topData)? topData.map((item, id) => (
        <Tiles item = {item} key={id}/>
    )) : null;


    return(
        <div className={`mx-7 my-10 min-h-[32rem]`}>

            {place? <div className="bg-neutral-800 animate-pulse rounded-xl h-[4rem] minitab:w-[30rem] mb-3"></div> :
             <h1 
            className="font-headings text-text-pri text-2xl mb-5 fade-in ">
                Check out our highest rated shows!
            </h1>}


            {place? <div className="bg-neutral-800 animate-pulse rounded-xl h-[2rem] minitab:w-[35rem]"></div> : 
            <h4 
            className="font-playful text-sm text-text-mute fade-in">
                Enjoy the best anime experience with the highest rated shows voted by you.
            </h4>}


            <div className="flex gap-8 overflow-x-auto whitespace-nowrap touch-pan-x overflow-y-hidden scrollbar-hide min-h-[24rem]">
                {topContent? topContent : "loading"}
            </div>
        </div>
    )
}


//OLDER JIKAN API VERSION

// const topUrl = "https://api.jikan.moe/v4/top/anime?limit=10"
//     useEffect(()=>{
//         fetch(topUrl)
//         .then(res => res.json())
//         .then(res => {
//             console.log(res)
//             setTopdata(res.data)
//         })
//         .catch(err => console.log(err))
//     },[])

//     useEffect(()=>{
// 	if(topData){
// 		console.log(topData)
// 	}
// },[topData])