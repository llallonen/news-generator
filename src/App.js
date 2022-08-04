import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/UI/AppRouter';
import Nav from './components/UI/navigate/Nav';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App;
