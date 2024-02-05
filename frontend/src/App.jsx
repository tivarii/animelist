import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './component/CreateTodo'
import { AddAnime } from './component/CreateTodo'
import "./component/Anime/"
import { RenderList } from './component/anime'
function App() {
  const[anime,addAnime]=useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3000/animelist");
  //       const json = await response.json();
  //       addAnime(json.list); // Assuming the response has a 'list' property
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  
  return (
  <div>
    <AddAnime></AddAnime>
    <RenderList list={anime}></RenderList>
    </div>
    )
}

export default App
