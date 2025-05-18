import { useState, useEffect } from "react"



export default function TrialBox(){
    const [place, setPlace] = useState(true)

    useEffect(()=>{
            setTimeout(()=>{
                setPlace(false)
            },600)
        },[])
    


    return(
        <div>
            {place? <div className="bg-neutral-800 animate-pulse rounded-3xl w-[21rem] h-[14rem] my-10 mx-auto"></div> : <div className="w-[21rem] h-[14rem] grid place-items-center mx-auto my-10 bg-vibeBlack
            rounded-3xl font-playful text-text-mute text-sm
            bg-[#0b0c10] shadow-[0_0_40px_rgba(220,20,60,0.35)] fade-in">
                <h2 className="font-headings text-lg text-text-pri text-center mx-5">AnimeHub: Watch anime. Anytime and Anywhere</h2>
                <p className="mx-5 text-center">All anime ad-free with downloads.Try it for free for 7 days and Cancel anytime!</p>
                <button className="h-[2.5rem] w-[18rem] -mt-4 mb-3 bg-crimAccent font-headings text-vibeBlack">START FREE TRIAL</button>
            </div>}
        </div>
    )
}