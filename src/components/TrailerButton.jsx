



export default function TrailerButton({ trailer }){
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