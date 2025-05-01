import { useEffect, useState } from 'react';
import './App.css'

function App() {
const [data, setData] = useState(""); 
const url = 'https://anime-db.p.rapidapi.com/anime/by-ranking/3';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '210cf12d9amsh8f8abf948ad23d8p1ea06bjsne581f4855db6',
		'x-rapidapi-host': 'anime-db.p.rapidapi.com'
	}
};
useEffect(() => {
  fetch(url, options)
  .then(response => response.json())
  .then(response => setData(response))
  .catch(err => console.error(err));
})

  
  return (
    <>
    {data.title}
    </>
  )
}

export default App
