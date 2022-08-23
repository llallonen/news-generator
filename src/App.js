import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Nav from './components/UI/navigate/Nav';
import AuthContext from './context';
import './styles/App.css';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <Nav />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>

  )
}

export default App;
