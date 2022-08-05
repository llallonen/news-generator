import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../../pages/About'
import NotFound from '../../pages/NotFound'
import PostIdPage from '../../pages/PostIdPage'
import Posts from '../../pages/Posts'

const AppRouter = () => {
  return (
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route exact path="/posts/:id" element={<PostIdPage />} />
        <Route path="/posts" element={<Posts />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
  )
}

export default AppRouter