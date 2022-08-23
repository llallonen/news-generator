import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthContext from '../context'
import About from '../pages/About'
import NotFound from '../pages/NotFound'
import PostIdPage from '../pages/PostIdPage'
import Posts from '../pages/Posts'
import { publicRoutes, privateRoutes } from '../router/routes'

const AppRouter = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  console.log(isAuth)
  return (
    isAuth ?
      <Routes>
        {privateRoutes.map(route =>
          <Route element={<route.component />} path={route.path} />
        )}
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route =>
          <Route element={<route.component />} path={route.path} />
        )}
      </Routes>
  )
}

export default AppRouter