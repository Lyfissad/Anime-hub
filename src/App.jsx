import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/header';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
  } from "@/components/ui/carousel"
  

function App() {
const [data, setData] = useState(null);
const url = "https://api.jikan.moe/v4/anime/20";

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
		console.log(data.title)
	}
},[data])
  

return (
	<div className="home">
		<Header />
	</div>


);

}

export default App



//Fetching and mapping logic

// {data?.data?.length?(
// 	<Carousel>
// 	<CarouselContent>
// 		<CarouselItem><img className='w-full h-5/6' src={data.data[0].image} alt="image 1" /></CarouselItem>
// 		<CarouselItem><img className='w-full h-5/6' src={data.data[1].image} alt="image 2" /></CarouselItem>
// 		<CarouselItem><img className='w-full h-5/6' src={data.data[2].image} alt="image 3" /></CarouselItem>
// 	</CarouselContent>
// 	<div className="flex justify-between items-center w-full">
// 	<CarouselPrevious className="bg-white text-black hover:bg-gray-200 rounded-full shadow-md ml-20 mr-auto" />
// 	<CarouselNext className="bg-white text-black hover:bg-gray-200 rounded-full shadow-md ml-auto mr-20" />
// 	</div>
// 	</Carousel>
// ): (<p className='text-white'>Loading...</p>)}	


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