import React from 'react'
import './index.css'
import Home from './pages/Home.jsx'
import Canvas from './canvas/index.jsx'
import Customizer from './pages/Customizer'
const App = () => {
  return (
    <main className='app transition-all ease-in'>
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App

