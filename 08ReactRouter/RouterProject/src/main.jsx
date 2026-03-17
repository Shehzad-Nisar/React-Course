import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Header} from './index.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
    
  </StrictMode>,
)
