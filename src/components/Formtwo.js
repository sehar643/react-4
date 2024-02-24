import React, { useState } from 'react'

const Formtwo = () => {

    const[name, setName] = useState('')
    const[add, setAdd] = useState('')


  return (
    <div>
        <h1>Form one</h1>

        Name: <input onChange={(e) =>{setName(e.target.value)}} type='text' /><br /><br />
        Address: <input onChange={(e) =>{setAdd(e.target.value)}} type='text' />

        <h1>Name: {name}</h1>
        <h1>Address: {add}</h1>


    </div>
  )
}

export default Formtwo