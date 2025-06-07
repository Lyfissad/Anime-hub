import '../App.css'
import Header from './ui/header';
import { Carousel } from './ui/carousel';
  import { AiOutlineLoading } from "react-icons/ai";
  import Content from './ui/carouselcontent';
  import TopAnime from './ui/topAnime';
import TrialBox from './ui/trialBox';
import NewEpisodes from './ui/NewEpisodes';
import Footer from './ui/Footer';
import { Suspense } from 'react';




function Home() {


{/*fetching data moved to other components*/}

	

return (
	<div className="h-full">
		<Header />
		<Carousel>
			<Suspense fallback = {<div className="flex justify-center items-center min-h-screen w-full h-full">
                    <AiOutlineLoading className='fill-crimAccent size-18 spinFast m-auto'/>
                </div>}> 
				<Content />
			</Suspense>
		</Carousel>
	<TopAnime />
	<TrialBox />
	<NewEpisodes />
	<Footer />
	</div>


);

}

export default Home





//Old Jikan version API


//const url = "https://api.jikan.moe/v4/seasons/now?limit=15"

// fetch(url)
// 	.then(response => response.json())
// 	.then(response => {
// 	  console.log(response);
// 	  setData(response.data);
// 	})
// 	.catch(err => console.error(err)); 


//Fetching and mapping logic first draft

	


// <>
//     <h1>Anime List Bitch</h1>
//     {data? data.data.map((item) => ( 
//     <div className="container">
//       <h1>{item.title}</h1>
//       <p>{item.synopsis}</p>
//       <img src={item.image} alt="{item.title}" />
//     </div>
//   )
// )
// : <h1>Loading</h1>
// }
//   </>






// {data && data.data ? (
//   data.data.map((item) => (
//     <div className="container" key={item.id}>
//       <h2>{item.title}</h2>
//       <p>{item.synopsis}</p>
//       <img src={item.image} alt={item.title} />
//     </div>
//   ))
// ) : (
//   <p>Loading...</p>
// )}