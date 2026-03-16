import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {id} =  useParams()
  return (
    <>
    <h1>id is : {id} </h1>
    <h1>hello</h1>
      
    </>
  )
}

export default User
