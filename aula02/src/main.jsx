import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ExemploCss from './components/ExemploCss.jsx'
import AppClass from './components/AppClass.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppClass curso="React" />
  </StrictMode>,
)
