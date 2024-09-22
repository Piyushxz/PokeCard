import { useState,useEffect } from "react";
import { useModal } from "../../context/modal-context";
import "./Modal.css"
import axios from "axios";
const Modal = ( ) =>{
    const [descriptionURL,setDescriptionURL] = useState(null)
    const [descriptionData,setDescriptionData] = useState(null)
    const {modalDispatch,pokemon} = useModal()
    console.log("description data ",descriptionData)
    useEffect(() => {
        if (pokemon) {
            const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}/`;
            setDescriptionURL(url);
        }
    }, [pokemon]);

    useEffect(() => {
        if (descriptionURL) {
            const fetchData = async () => {
                try {
                    const response = await axios.get(descriptionURL);
                    setDescriptionData(response.data); 
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };
            fetchData();
        }
    }, [descriptionURL]);
    const handleModalClose = () =>{
        modalDispatch({
            type:"OPEN_MODAL",
            payload:null
        })
    }
    return(
        <>
           <div className="modal-container">
            <div className="modal-contents">
                <div className="modal-header">
                    <div>
                        <h1 className="head-1">{pokemon?.name}</h1>
                     </div>

                    <div>
                        <span onClick={handleModalClose}className="close material-symbols-outlined">    
                            close
                        </span>
                    </div>



                 </div>
                <div className="description">
                     <div className="modal-image-container">
                            <img className='modal-image' src={pokemon?.sprites?.front_default}/>
                    </div>
                    <div>
                    {
                        descriptionData &&

                        <div>
                            <h3>{descriptionData.flavor_text_entries[0]?.flavor_text}</h3>
                        </div>
                    }
                    <h2 className="h2">Types:</h2>
                    <div className="type-container-modal">
                    {
                        pokemon?.types?.map((typeObj,index)=>(
                            <p key={index} className={`${typeObj.type.name}`}>{typeObj.type.name}</p>
                        ))
                    }
                    </div>
                    </div>

                </div>


                
            </div>


        

        </div>
        </>

    )
}

export default Modal