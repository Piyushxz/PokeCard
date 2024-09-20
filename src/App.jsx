import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import axios from 'axios';
import { useModal } from './context/modal-context';

function App() {
  const [pokemonArray, setPokemonArray] = useState([]); 
  const [filteredPokemonArray, setFilteredPokemonArray] = useState([]); 
  const {searchValue} = useModal()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
        setPokemonArray(response.data?.results);
        setFilteredPokemonArray(response.data?.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    
    if (searchValue === '') {
      setFilteredPokemonArray(pokemonArray);
    } else {

      const filtered = pokemonArray.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredPokemonArray(filtered);
    }
  }, [searchValue]);

  return (
    <>
      <Navbar />
      <div className='main'>
        {filteredPokemonArray.map((pokemon, index) => (
          <Card key={index} data={{ url: pokemon.url }} />
        ))}
      </div>
    </>
  );
}

export default App;
