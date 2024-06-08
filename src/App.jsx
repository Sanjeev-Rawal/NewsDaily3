import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar';
import Newsboard from './Components/Newsboard';
import React from "react";


function App() {
  

  return (
    <>
          <div className="App">
      
      <Navbar/>
      <Newsboard/>
            
          </div>


    </>
  )
}

export default App
