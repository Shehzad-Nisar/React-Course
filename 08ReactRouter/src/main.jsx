import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home,Footer, About } from "./components/index.js"
import './index.css'
import User from './components/User/User.jsx'





const route  = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
   {
    path: '/footer',
    element: 
    <div>
    <Home/>
    <Footer/></div>
  },
  {
    path: '/about',
    element:
    <div>
    <Home/>
    <About/></div>
  },
  {
    path: '/use/:id',
    element:
    <div>
    <Home/>
    <User/>
    
    
    </div>
  },
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
    

  </StrictMode>,
)
