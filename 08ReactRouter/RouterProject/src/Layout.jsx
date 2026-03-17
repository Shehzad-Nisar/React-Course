import { Outlet } from 'react-router-dom'
import {Header, Footer} from './index.js'

const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet/> {/* used dynamic content here  */}
        <Footer/>

    
    
    </>
  )
}

export default Layout
