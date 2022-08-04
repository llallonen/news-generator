import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../../pages/About'
import NotFound from '../../pages/NotFound'
import Posts from '../../pages/Posts'

const AppRouter = () => {
  return (
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
  )
}

export default AppRouter