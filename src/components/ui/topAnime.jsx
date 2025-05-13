import { useEffect, useState } from "react"




export default function TopAnime(){
    const [topData,setTopdata] = useState(null)

    const topUrl = "https://api.jikan.moe/v4/top/anime?limit=10"


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

    const topContent = Array.isArray(topData)? topData.map((item, id) => (
    <div className="mt-8 min-w-[10rem]" key={id}>
            <img className="h-60 w-full overflow-y-scroll object-cover" src={item.images.jpg.image_url} alt="" />
            <h3 className="text-text-pri mt-3 font-headings text-sm whitespace-pre-wrap">{item.title}</h3>
            <h4 className="text-text-mute pt-3 font-playful text-xs">{item.year}</h4>
        </div>
    )) : null;


    return(
        <div className="mx-7 mb-5">
            <h1 
            className="font-headings text-text-pri text-2xl mb-5">
                Check out our highest rated shows!
            </h1>
            <h4 
            className="font-playful text-text-mute">
                Enjoy the best anime experience with the highest rated shows voted by you.
            </h4>
            <div className="flex gap-5 overflow-x-auto whitespace-nowrap scrollbar-hidden">{topContent}</div>
        </div>
    )
}