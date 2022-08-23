import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../../context';
import MyButton from '../buttons/MyButton'

const Nav = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }

  return (
    <div className='nav'>
      <MyButton onClick={logout}>
        Exit
      </MyButton>
      <div className='nav__item'>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  )
}

export default Nav