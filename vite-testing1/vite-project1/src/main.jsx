import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './StylesLogin.css'
import './StylesMain.css'
import Login from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
