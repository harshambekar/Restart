import React, { useState } from 'react'
import useDispatch from 'redux-toolkit'
import addTodo from './todoSlice'

function u() {
    const dispatch=useDispatch();
    const [input,setInput]=useState([])

    const addeventHndler=(e)=>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');

    }
  return (    
    <>



    </>
  )
}

export default u