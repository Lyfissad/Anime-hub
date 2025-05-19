import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/ui/header';
import {
	Carousel
  } from "@/components/ui/carousel"
  import { AiOutlineLoading } from "react-icons/ai";
  import Content from "./components/ui/carouselcontent.jsx"
  import TopAnime from './components/ui/topAnime';
import TrialBox from './components/ui/trialBox';
import NewEpisodes from './components/ui/NewEpisodes';




function App() {
const [data, setData] = useState(null);
const url = "https://api.jikan.moe/v4/seasons/now?limit=15"

useEffect(() => {
	fetch(url)
	.then(response => response.json())
	.then(response => {
	  console.log(response);
	  setData(response.data);
	})
	.catch(err => console.error(err));  
  

},[])
  



useEffect(()=>{
	if(data){
		console.log(data)
	}
},[data])

	


return (
	<div className="h-full">
		<Header />
		{data?.length?(
		<Carousel> 
			<Content data = {data}/>
		</Carousel>
	): (
	<div className="flex justify-center items-center min-h-screen w-full h-full">
	<AiOutlineLoading className='fill-crimAccent size-18 animate-spin m-auto'/>
	</div>
	)}
	<TopAnime />
	<TrialBox />
	<NewEpisodes data = {data}/>
	</div>


);

}

export default App










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