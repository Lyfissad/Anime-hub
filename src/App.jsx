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
const url = "https://api.jikan.moe/v4/top/anime";

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
		console.log(data[1].images.jpg.large_image_url)
	}
},[data])
  

return (
	<div className="home">
		<Header />
		{data?.length?(
		<Carousel>
		<CarouselContent>
			<CarouselItem><img className='w-full h-5/6' src={data[0].images.jpg.large_image_url} alt="image 1" /></CarouselItem>
			<CarouselItem><img className='w-full h-5/6' src={data[1].images.jpg.large_image_url} alt="image 2" /></CarouselItem>
			<CarouselItem><img className='w-full h-5/6' src={data[2].images.jpg.large_image_url} alt="image 3" /></CarouselItem>
			<CarouselItem><img className='w-full h-5/6' src={data[3].images.jpg.large_image_url} alt="image 3" /></CarouselItem>
			<CarouselItem><img className='w-full h-5/6' src={data[4].images.jpg.large_image_url} alt="image 3" /></CarouselItem>
			<CarouselItem><img className='w-full h-5/6' src={data[5].images.jpg.large_image_url} alt="image 3" /></CarouselItem>
			<CarouselItem><img className='w-full h-5/6' src={data[6].images.jpg.large_image_url} alt="image 3" /></CarouselItem>
			<CarouselItem><img className='w-full h-5/6' src={data[7].images.jpg.large_image_url} alt="image 3" /></CarouselItem>
			<CarouselItem><img className='w-full h-5/6' src={data[8].images.jpg.large_image_url} alt="image 3" /></CarouselItem>
			<CarouselItem><img className='w-full h-5/6' src={data[9].images.jpg.large_image_url} alt="image 3" /></CarouselItem>
		</CarouselContent>
		<div className="flex justify-between items-center w-full">
		<CarouselPrevious className="bg-white text-black hover:bg-gray-200 rounded-full xs:hidden md:visible shadow-md ml-20 mr-auto" />
		<CarouselNext className="bg-white text-black hover:bg-gray-200 rounded-full xs:hidden md:visible shadow-md ml-auto mr-20" />
		</div>
		</Carousel>
	): (<p className='text-white'>Loading...</p>)}
	</div>


);

}

export default App



//Fetching and mapping logic

	


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