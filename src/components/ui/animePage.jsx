import { useParams } from "react-router-dom"
import { gql, useSuspenseQuery } from "@apollo/client";
import { Suspense } from "react";
import AnimeOverlay from "./AnimeOverlay";
import { AiOutlineLoading } from "react-icons/ai";

export default function AnimePage(){
    const { id } = useParams()

    const getAnime = gql`
    query getAnime($id: Int){
        Media(
        type: ANIME,
        id:$id){

            title{
                romaji
                english
                native
            }
                description(asHtml: false)

            bannerImage

            coverImage {
            extraLarge
            large
            }

            averageScore
            meanScore
            popularity
            favourites

            episodes
            duration
            status
            season
            seasonYear
            format
            source

            genres

            studios(isMain: true) {
            nodes {
                name
            }
            }

            trailer {
            id
            site
            }

            nextAiringEpisode {
            episode
            airingAt
            }

            startDate {
            day
            month
            year
            }

            endDate {
            day
            month
            year
            }

            siteUrl
        
            recommendations(sort: RATING_DESC, perPage: 10) {
                nodes {
                    rating
                    mediaRecommendation {
                    id
                    title {
                        romaji
                        english
                    }
                    coverImage {
                        extraLarge
                    }
                    averageScore
                    }
                }
                }
        }
    }`
    
    const {data, loading, error} = useSuspenseQuery(getAnime, 
        {
            fetchPolicy: "cache-and-network",
            variables: {id}
        
        }
    )
    const anime = data.Media
    console.log(data)

    return(
        <Suspense>
        {!loading? 
        <div className="text-crimAccent fade-in transition-all min-h-full">
            <div>
            <img src={anime.bannerImage} alt="Cover Image" className="w-full phone:hidden minitab:block phone:h-[35rem] minitab:h-[45rem] object-cover
                    object-center filter" />
            <img src={anime.coverImage.extraLarge} alt="Cover Image" className="w-full phone:block minitab:hidden phone:h-[35rem] minitab:h-[45rem] object-cover
                    object-center filter" />
            </div>
                <AnimeOverlay anime = {anime}/>
        </div> : <div className="min-h-full">
                    <AiOutlineLoading className="fill-crimAccent size-20  animate-spin"/>
                </div>}
        </Suspense>
    )
}