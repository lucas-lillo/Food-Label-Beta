import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './StylesLogin.css'
import './StylesMain.css'
import Login from './App.jsx'
import SelecaoUsuario from './SelecaoUsuario.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path="/SelecaoUsuario" element={<SelecaoUsuario/>} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
