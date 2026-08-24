import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { StringCleanDescription } from "../BannerOverlay";
import { IoMdAdd } from "react-icons/io";

const AnimeOverlay = (props) => {
    const Anime = props.anime
    const rating = (Anime.averageScore ?? 0) / 20;

    const ratingStars = [1,2,3,4,5].map((star) => {
        if (rating >= star) {
        return <FaStar key={star} />;
    }

    if (rating >= star - 0.5) {
        return <FaStarHalfAlt key={star} />;
    }

    return <FaRegStar key={star} />
    })
    
    const Genres = Anime.genres.join(", ");

    return(
        <div>
            <div>
                <div className="absolute text-text-pri mx-auto font-headings top-50 text-5xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    <h4 className="my-10">
                        {Anime.title.english || Anime.title.romaji || Anime.title.native}
                    </h4>
                    <div className="flex h-12 space-x-2">
                        <div className="flex size-30">{ratingStars}</div>
                        <h1 className="relative top-0.5 my-auto font-headings text-base text-text-mute">|    Average Rating: <span className="text-text-pri">{rating}</span></h1>
                        </div>
                        <p className="flex gap-1 italic text-base">{Genres}</p>
                        <p className="text-base text-ellipsis font-playful max-w-1/2 mt-5">{StringCleanDescription(Anime.description) || "No Description Available"}</p>
                        <div className="flex items-center gap-2 mt-3">
                            <button onClick={() => {alert("Currently Implementing Streaming")}} className="font-headings bg-crimAccent text-base rounded-sm w-[10rem] h-[2rem] text-vibeBlack hover:scale-105 transition-all
                            duration-100 cursor-pointer">Start Watching</button>
                            <IoMdAdd className="size-8 fill-crimAccent hover:scale-125 transition-all duration-150 cursor-pointer"/>
                        </div>
                </div>
            </div>
            <div className="absolute phone:hidden miniTab:block h-[79dvh] top-15 z-50 inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
                <div className="absolute text-text-pri font-headings mx-20 top-50 text-5xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    <h4 className="my-10">
                        {Anime.title.english || Anime.title.romaji || Anime.title.native}
                    </h4>
                    <div className="flex h-12 space-x-2">
                        <div className="flex size-30">{ratingStars}</div>
                        <h1 className="relative top-0.5 my-auto font-headings text-base text-text-mute">|    Average Rating: <span className="text-text-pri">{rating}</span></h1>
                        </div>
                        <p className="flex gap-1 italic text-base">{Genres}</p>
                        <p className="text-base text-ellipsis font-playful max-w-1/2 mt-5">{StringCleanDescription(Anime.description) || "No Description Available"}</p>
                        <div className="flex items-center gap-2 mt-3">
                            <button onClick={() => {alert("Currently Implementing Streaming")}} className="font-headings bg-crimAccent text-base rounded-sm w-[10rem] h-[2rem] text-vibeBlack hover:scale-105 transition-all
                            duration-100 cursor-pointer">Start Watching</button>
                            <IoMdAdd className="size-8 fill-crimAccent hover:scale-125 transition-all duration-150 cursor-pointer"/>
                        </div>
                </div>
        </div>
        </div>
    )

}






export default AnimeOverlay