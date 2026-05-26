import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Referencias from './pages/Referencias.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Referencias />
  </StrictMode>,
)
