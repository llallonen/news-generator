import React from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Nav from './components/UI/navigate/Nav';
import About from './pages/About';
import Posts from './pages/Posts';
import NotFound from './pages/NotFound';
import AppRouter from './components/UI/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App;
