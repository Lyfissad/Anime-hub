import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/header';

function App() {
const [data, setData] = useState({});
const viteApiKey = import.meta.env.VITE_API_KEY
const viteApiUrl = import.meta.env.VITE_API_URL 
const url = `${viteApiUrl}/anime?page=1&size=10&sortBy=ranking&sortOrder=asc`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': viteApiKey,
		'x-rapidapi-host': 'anime-db.p.rapidapi.com'
	}
};

// useEffect(() => {
//   fetch(url, options)
//   .then(response => response.json())
//   .then(response => {
//     console.log(response);
//     setData(response);
//   })
//   .catch(err => console.error(err));  
// },[])

console.log(data)
return (
  <Header />
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