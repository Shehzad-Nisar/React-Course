import React,{useContext} from 'react'
import UserContext from "../context/userContext";


const Profile = () => {
  const {user} = useContext(UserContext);

  if (!user) return <div>Please Login first</div>

  return <div>Wellcome <b>{user.userName}</b>.</div>
 
}

export default Profile
