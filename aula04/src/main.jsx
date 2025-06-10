import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Effect from './components/Effect'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Effect />
  </StrictMode>,
)
