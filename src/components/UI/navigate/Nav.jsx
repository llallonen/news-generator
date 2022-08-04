import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
    <div className='nav__item'>
      <Link to="/about">About</Link>
      <Link to="/posts">Posts</Link>
    </div>
  </div>
  )
}

export default Nav