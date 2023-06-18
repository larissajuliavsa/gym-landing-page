import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Home from './pages/Home'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
