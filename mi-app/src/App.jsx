import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import './components/Header.jsx'
import {Route, Routes} from 'react-router-dom'
import Inicio from './pages/inicio.jsx'
import Cursos from './pages/Cursos.jsx'
import Contador from './pages/Contador.jsx'
import Login from './pages/Login.jsx'

function App() {
return (
  <Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/cursos" element={<Cursos />} />
    <Route path="/nosotros" element={<Contador />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<h1>404 NOT FOUND</h1>} />
  </Routes>
);
}

export default App
