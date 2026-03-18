import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stair from './components/Common/Stair.jsx'
import NavContext from './Context/NavContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Stair>
      <NavContext>
        <App />
      </NavContext>
    </Stair>
  </BrowserRouter>
)
