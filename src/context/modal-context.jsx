import {  createContext,useContext,useReducer } from "react";
import modalReducer from "../reducer/modalReducer";

const initialValue = {
    isInfoModalOpen:false,
    searchValue:"",
    pokemon:null
}

const ModalContext = createContext(initialValue)


const ModalProvider = ({children}) =>{

    const [{searchValue,isInfoModalOpen,pokemon},modalDispatch] = useReducer(modalReducer,initialValue)

    return(
        <ModalContext.Provider value={{isInfoModalOpen,searchValue,pokemon,modalDispatch}}>
            {children}
        </ModalContext.Provider>
    )
}

const useModal = ()=> useContext(ModalContext)

export {useModal,ModalProvider}