import {  createContext,useContext,useReducer } from "react";
import modalReducer from "../reducer/modalReducer";

const initialValue = {
    searchValue:""
}

const ModalContext = createContext(initialValue)


const ModalProvider = ({children}) =>{

    const [{searchValue},modalDispatch] = useReducer(modalReducer,initialValue)

    return(
        <ModalContext.Provider value={{searchValue,modalDispatch}}>
            {children}
        </ModalContext.Provider>
    )
}

const useModal = ()=> useContext(ModalContext)

export {useModal,ModalProvider}