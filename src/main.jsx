import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AlhenaPortfolio from './pages/AlhenaPortfolio.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AlhenaPortfolio/>
  </StrictMode>,
)
