import { useState,useEffect } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'
import axios from 'axios'
import { useModal } from './context/modal-context'

function App() {
  const [pokemonArray,setPokemonArray] = useState([])
  const {searchValue} = useModal()

  console.log(searchValue)

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
            console.log(response.data);
            setPokemonArray(response.data?.results)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    console.log(pokemonArray)
    fetchData();
}, []);

  return (
    <>
      <Navbar/>
      <div className='main'>
      {/* <Card data={{name:'bulbasor',url:"https://pokeapi.co/api/v2/pokemon/1/"}}/> */}

      {
        pokemonArray.map((pokemon,index)=>(
          <Card key={index} data={{url:pokemon.url}}/>
        ))
      }
      </div>
     
      
    </>
  )
}

export default App
