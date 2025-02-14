import { createContext, useReducer } from "react";
import { pokereducer } from "./pokereducer";

const pokecontext =createContext()

export const PokeProvider = ({children}) =>{
    const initialState ={
        pokemonDetails:[]
    }
    const [state , dispatch]=useReducer(pokereducer,initialState)

    return <pokecontext.Provider value={{...state , dispatch}}>{children}</pokecontext.Provider>
}

export default pokecontext;