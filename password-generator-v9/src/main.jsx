import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PassGen from './PassGen.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PassGen />
  </StrictMode>,
)
