import React, { useContext } from 'react'
import Form from '../component/Form'
import Card from '../component/Card'
import pokecontext from '../context/pokecontext'
import Loader from './../component/Loader';


const Home = () => {

  const {pokemonDetails} =useContext(pokecontext)
  // console.log(pokemonDetails)
  return (
    <div>
      <Form/>
     {!pokemonDetails ? <Loader/>:<Card pokemonDetails={pokemonDetails}/>}
    </div>
  )
}

export default Home
