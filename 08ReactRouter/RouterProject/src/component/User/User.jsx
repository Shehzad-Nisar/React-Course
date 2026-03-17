
import { useParams } from 'react-router-dom'


const User= () => {
    const {id} = useParams()
  return (
    <div className='bg-slate-100 h-80 '>

     
      <h1 className='text-9xl font-bold '>User no: {id}</h1>

        
      
    </div>
  )
}

export default User
