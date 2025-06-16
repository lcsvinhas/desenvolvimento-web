import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.jsx'
import Teste from './components/ExStyledComponent/Teste.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Teste />
  </StrictMode>,
)
