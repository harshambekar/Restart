import React, { useContext } from 'react'
import UserContextProvider from '../context/UserContextProvider'
import UserContext from '../context/UserContext'
function Profile() {

    const{user}=useContext(UserContext)


 if(!user) return <div>hlp</div>

 return <div>hilo, {user.username}</div>
}

export default Profile