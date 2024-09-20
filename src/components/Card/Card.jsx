import { useEffect,useState } from "react"
import axios from "axios";
const Card = ({data}) =>{
    const [pokemon,setPokemon] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(data.url);
                console.log(response.data)
                setPokemon(response.data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData();
    }, []);


    return(
        <>
            <div className="card shadow">
                <div className="card-image-container">
                    <img className="card-image" src={pokemon?.sprites.front_default}/>

                </div>
                <div className="movie-details">
                    <p className="title"> {pokemon?.name}</p>
                    {
                        pokemon?.types?.map((typeObj,index)=>(
                            <p key={index} className="genre">{typeObj.type.name}</p>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Card