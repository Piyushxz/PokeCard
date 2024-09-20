import { useState,useEffect } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'
import axios from 'axios'

function App() {

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
            console.log(response);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchData();
}, []);

  return (
    <>
      <Navbar/>
      <div className='main'>
      <Card data={{name:'bulbasor',url:"https://pokeapi.co/api/v2/pokemon/1/"}}/>
      </div>
     
      
    </>
  )
}

export default App
