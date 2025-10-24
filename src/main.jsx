import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { inject } from '@vercel/analytics'
import Coursecontainer from './Appcontext/Coursecontainer.jsx'

inject();

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <Coursecontainer>
        <App />
      </Coursecontainer>
    </BrowserRouter>
)
