import React from 'react'



const Card = ({pokemonDetails }) => {
   
  
    

  return (
    <div className=' mx-32 my-4 p-5 border border-purple-900 rounded-md flex flex-col items-center'>
      <h1 className='text-xl font-bold  text-purple-900 text-center' >Name : {pokemonDetails.name }</h1>
      <p className='text-xl  text-purple-900 text-center'>Type : {pokemonDetails.types[0].type.name }</p>
      <img className='my-3 w-32' src={pokemonDetails.sprites.other.dream_world.front_default }/>
      <audio controls>
        <source src={`${pokemonDetails.cries.latest}`} type="audio/ogg"/>
      </audio>
    </div>
  )
}

export default Card
