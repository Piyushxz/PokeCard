import { useState } from "react"
import { useModal } from "../../context/modal-context"

const Navbar = () =>{
    const [searchVal,setSearchVal] = useState('')
    const {modalDispatch} = useModal()

    const handleInputChange = (e) =>{
        setSearchVal(e.target.value)
        modalDispatch({
            type:"SEARCH_VALUE",
            payload:searchVal
        })
    }
    return(
        <>
        <div className="header">
            <h2 className="heading-1">PokeCard</h2>

            <div className="search-container">
                <input onChange={handleInputChange} className="input" placeholder="Search Pokémon"/>
            </div>
        </div>
        </>
    )
}

export default Navbar