import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Layout,Home,About,Contact,User} from './index.js'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './index.css'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         index: 'true',
//         element: <Home/>
//       },
//       {
//         path: 'about',
//         element: <About/>
//       },
//       {
//         path: 'contact',
//         element:<Contact/>
//       },
//       {
//         path: 'follower/:id',
//         element: <User/>
//       }
      
//     ]
//   }
// ])

// 2nd and optimized approach to decide path for nesting routes

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
    <Route index element={<Home />} ></Route>
    <Route path='about' element= {<About/>}></Route>
    <Route path='contact' element= {<Contact/>}></Route>
    <Route path='follower/:id' element= {<User/>}></Route>
    
  </Route>
  )
  
  
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
    
  </StrictMode>,
)
