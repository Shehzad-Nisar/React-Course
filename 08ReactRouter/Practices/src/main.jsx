import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home,Footer, About,Header,Contact,Github ,Error} from "./components/index.js"
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
    <Footer/></div>,
    children: [
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'github',
        element: <Github/>

      },{
        path: 'header',
        element: <Header/>
      }
    ]
  },
  {
    path: '/about',
    element:
    <div>
    <Home/>
    <About/></div>
  },
  {
    path: '/user/:id',
    element:
    <div>
    <Home/>
    <User/>
    
    
    </div>
  },
  {
    path: '*',
    element: <Error/>
  }
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
    

  </StrictMode>,
)
