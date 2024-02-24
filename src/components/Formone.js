import React, { useState } from 'react'

const Formone = () => {

    const[name, setName] = useState('')
    const[data, setData] = useState('')

    function abc(event){
        setName(event.target.value)
        // console.log(event.target.value)
        // console.log(event.target)
        // console.log(event.eventPhase)
    }
    console.log("____", name)

    function userData(){
        setData(name)
    }

  return (
    <div>
        <h1>Form one</h1>

        Name: <input onChange={abc} type='text' />

        <button onClick={userData}>Get Data</button>

        {/* Address: <input onChange={abc} type='text' /> */}

        {/* <h1>Name: {data}</h1> */}

        {data ? <h1>Name: {data}</h1> : '' }


    </div>
  )
}

export default Formone