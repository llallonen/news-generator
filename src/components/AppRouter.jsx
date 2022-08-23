import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthContext from '../context'
import About from '../pages/About'
import NotFound from '../pages/NotFound'
import PostIdPage from '../pages/PostIdPage'
import Posts from '../pages/Posts'
import { publicRoutes, privateRoutes } from '../router/routes'
import MyLoader from './UI/loader/MyLoader'

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);
  console.log(isAuth)

  if (isLoading) {
    return <MyLoader />
  }

  return (
    isAuth ?
      <Routes>
        {privateRoutes.map(route =>
          <Route
            element={<route.component />}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        )}
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route =>
          <Route
            element={<route.component />}
            path={route.path}
            exact={route.exact}
            key={route.path} />
        )}
      </Routes>
  )
}

export default AppRouter