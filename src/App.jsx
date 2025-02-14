import React from 'react'
import Navbar from './component/Navbar'
import Home from './Pages/Home'
import { PokeProvider } from './context/pokecontext'

const App = () => {
  return (
    <PokeProvider>
    <Navbar/>
    <Home/>
    </PokeProvider>
  )
}

export default App
