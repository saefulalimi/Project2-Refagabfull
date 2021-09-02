

const initialState ={
    buku : []

}

const reducer = (state = initialState, action) => {
    if(action.type === "ADD_BUKU"){
        return{
            ...state,
            buku:[...state.buku, action.payload]
        }
    }
    return state
}

export default reducer