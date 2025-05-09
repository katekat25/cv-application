import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './Header'
import { Education } from './Education'
import { WorkHistory } from './WorkHistory'
import { Skills } from './Skills'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Education />
    <WorkHistory />
    <Skills />
  </StrictMode>,
)
