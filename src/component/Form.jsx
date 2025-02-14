import React, { useContext, useState } from 'react'
import { fetchPokemon } from '../context/pokeservice'
import pokecontext from '../context/pokecontext'

const Form = () => {
  const {dispatch} = useContext(pokecontext)
  const [name , setName ] = useState('')
  const handleSubmit =async(e) =>{
    e.preventDefault()
    const data =  await fetchPokemon(name)
    dispatch({
      type:"GET_POKEMON",
      payload : data
    })
    // console.log(data)
    setName("")
  }
  return (
    <div className=' mx-32 my-4 p-5 border border-purple-900 rounded-md '>
      <h1 className='text-xl font-bold uppercase text-purple-900 text-center' >Search Any Pokemon Here</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='E.g Pikachu' onChange={(e) => setName(e.target.value)} value={name}
         className='p-5 border-b-2 border-purple-900 w-full focus:outline-none placeholder:text-purple-400'/> 
        <button className='bg-purple-300 my-2 py-2 px-6 w-full text-lg font-bold text-purple-900'>Search</button>
      </form>
    </div>
  )
}

export default Form
