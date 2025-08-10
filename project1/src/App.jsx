import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './component/header.jsx'
import Freame from './component/Freame.jsx'
import Contect from './component/Contect.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Freame />
            </>
          } />
          <Route path="/contact" element={<Contect />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
