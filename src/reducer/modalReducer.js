const modalReducer = (state,{type,payload}) =>{
    switch(type){
        case "SEARCH_VALUE":
            return{
                ...state,
                searchValue : payload
            }

        case "OPEN_MODAL":
            return{
                ...state,
                isInfoModalOpen : !state.isInfoModalOpen,
                pokemon:payload
            }

        default:
            return state;
    }
}

export default modalReducer