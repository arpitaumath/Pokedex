export const pokereducer =(state , action) =>{
    switch (action.type) {
        case "GET_POKEMON":
            return{
                
                ...state,
                pokemonDetails:action.payload
            }
            // console.log(action.paylaod)

            
    
        default:
            return state
           
    }
}