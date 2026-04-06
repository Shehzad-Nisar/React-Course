import React from 'react'
import Child1 from './Child1'

const Parent = () => {
  return (
    <div className='bg-red-500'>
      <h1>Parent element</h1>
      <Child1/>
    </div>
  )
}

export default Parent
