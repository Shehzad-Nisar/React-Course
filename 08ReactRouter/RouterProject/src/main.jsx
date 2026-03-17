import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Layout,Home,About,Contact,User} from './index.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: 'true',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'contact',
        element:<Contact/>
      },
      {
        path: 'follower/:id',
        element: <User/>
      }
      
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
    
  </StrictMode>,
)
