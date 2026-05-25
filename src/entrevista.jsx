import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Entrevista from './pages/Entrevista.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Entrevista />
  </StrictMode>,
)
