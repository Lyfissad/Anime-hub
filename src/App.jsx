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
  import { AiOutlineLoading } from "react-icons/ai";

function App() {
const [data, setData] = useState(null);
const url = "https://api.jikan.moe/v4/seasons/now";

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


	const tiles = Array.isArray(data)
	? data.map((item, index) => (
		<CarouselItem key={index}>
			<div className="relative">
				<img
				className="w-full h-5/6 object-cover"
				src={item.images.jpg.large_image_url}
				alt={item.title}
				/>
				<div className="bg-lightSlate w-48 absolute h-8 rounded-md">
					<p className='text-lightGray italic p-auto'>{item.rating}</p>
				</div>
			</div>
		</CarouselItem>
		))
	: null;



return (
	<div className="home">
		<Header />
		{data?.length?(
		<Carousel>
		<CarouselContent className="fade-in relative">
		{tiles}
		</CarouselContent>
		<div className="flex justify-between items-center w-full">
		<CarouselPrevious className="bg-white text-black fade-in hover:bg-gray-200 rounded-full xs:hidden md:visible shadow-md ml-20 mr-auto" />
		<CarouselNext className="bg-white text-black fade-in hover:bg-gray-200 rounded-full xs:hidden md:visible shadow-md ml-auto mr-20" />
		</div>
		</Carousel>
	): (
	<div className="flex justify-center items-center min-h-screen w-full h-full">
	<AiOutlineLoading className='fill-lightSlate size-18 animate-spin m-auto'/>
	</div>
	)}
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