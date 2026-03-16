import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home,Footer, About } from "./components/index.js"
import './index.css'





const route  = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
   {
    path: '/footer',
    element: <Footer/>
  },
  {
    path: '/about',
    element: <About/>
  },
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
    

  </StrictMode>,
)
