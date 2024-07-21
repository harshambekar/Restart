import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function User() {

      const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/harshambekar')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
  return (
   <>
   <p>hello</p>
   <p>{data.followers}</p>
   <img src={data.avatar_url} alt="" />
   </>

   
  )
}

export default User