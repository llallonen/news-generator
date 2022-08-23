import React, { useContext } from 'react'
import MyButton from '../components/UI/buttons/MyButton'
import MyInput from '../components/UI/inputs/MyInput'
import AuthContext from '../context'

const Login = () => {

  const {isAuth, setIsAuth} = useContext(AuthContext);

  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
  }

  return (
    <div>
      <h1>Sign up page</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder='Enter login'></MyInput>
        <MyInput type="password" placeholder='Enter password'></MyInput>
        <MyButton>Enter</MyButton>
      </form>
    </div>
  )
}

export default Login