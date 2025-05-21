import { useEffect, useRef, useState } from "react"




export default function TopAnime(){
    const [topData,setTopdata] = useState(null)
    const topUrl = "https://api.jikan.moe/v4/top/anime?limit=10"
    const [place,setPlace] = useState(true)


    useEffect(()=>{
        fetch(topUrl)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setTopdata(res.data)
        })
        .catch(err => console.log(err))
    },[])

    useEffect(()=>{
	if(topData){
		console.log(topData)
	}
},[topData])


    useEffect(()=>{
        setTimeout(()=>{
            setPlace(false)
        },600)
    },[])




    function Tiles ({item}){
        const [visible,setVisible] = useState(false)
        const ref = useRef()

        useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            {threshold : 0.6}
        )
        if(ref.current)observer.observe(ref.current)
            return  () => observer.disconnect() 

    }, [])


    return(
        <div  ref={ref} className={`mt-8 min-w-[10rem] p-2 transition-all duration-200 ${visible? "brightness-100 scale-103" : "brightness-50 scale-100"}`}>
            <img className="h-60 w-full rounded-xl object-cover" src={item.images.webp.image_url} alt="" />
            <div className="flex flex-col h-[5rem] justify-between">
            <h3 className="text-text-pri mt-3 font-headings line-clamp-2 text-sm whitespace-pre-wrap">{item.title}</h3>
            <h4 className="text-text-mute pt-3 font-playful text-xs whitespace-pre-line">{item.genres[0].name}, {item.genres[1].name}, {item.genres[2].name}</h4>
            </div>
        </div>
    )
    }

    const topContent = Array.isArray(topData)? topData.map((item, id) => (
        <Tiles item = {item} key={id}/>
    )) : null;


    return(
        <div className={`mx-7 my-10 min-h-[32rem]`}>

            {place? <div className="bg-neutral-800 animate-pulse rounded-xl h-[4rem] mb-3"></div> :
             <h1 
            className="font-headings text-text-pri text-2xl mb-5 fade-in ">
                Check out our highest rated shows!
            </h1>}


            {place? <div className="bg-neutral-800 animate-pulse rounded-xl h-[2rem]"></div> : 
            <h4 
            className="font-playful text-sm text-text-mute fade-in">
                Enjoy the best anime experience with the highest rated shows voted by you.
            </h4>}


            <div className="flex gap-8 overflow-x-auto whitespace-nowrap overflow-y-hidden scrollbar-hide h-[24rem]">{topContent}</div>
        </div>
    )
}