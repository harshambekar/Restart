import { useCallback } from 'react';
import { useState,useEffect } from 'react'



const [password,setPassword]=useState("");

const[length,setLength]=useState(6);

const[charallowed,setCharAllowed]=useState(false)

const[numalloed,setNumberAllowed]=useState(false)



const passwordGenerator=useCallback(()=>{
  let pass=""
  let gene="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  
  if(charallowed) gene+="0123456789"
  if(numalloed) gene+= "!@#$%^&*-_+=[]{}~`"


  for (let i = 0; i < length; i++) {
    let a=Math.floor(Math.random()*gene.length+1)

    pass+=str.charAt(a)


    
  }

  set
}


function App() {
 
  return (
    <>
      <div>
       <h1>Hello world</h1>
       <p>lets have fun</p>
      </div>
    
    </>
  )
}

export default App
