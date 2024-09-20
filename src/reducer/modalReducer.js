const modalReducer = (state,{type,payload}) =>{
    switch(type){
        case "SEARCH_VALUE":
            return{
                ...state,
                searchValue : payload
            }

        default:
            return state;
    }
}

export default modalReducer