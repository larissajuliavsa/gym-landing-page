import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Modalities from './pages/Modalities'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Home from './pages/Home'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/modalities' element={<Modalities />} />
        <Route path='/plans' element={<Contact />} />
        <Route path='/schedule' element={<Contact />} />
        <Route path='/instructors' element={<Contact />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
