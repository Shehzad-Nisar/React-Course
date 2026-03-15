import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './layout'
import Home from './components/Home/Home.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children : [
      {path : 'home',
      element: <Home/>},
     

    ]
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}  />

  </StrictMode>,
)
