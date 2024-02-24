import React, { useState } from 'react'

const Formthree = () => {

    const[userInfo, setUserInfo] = useState(
        {
            name: '',
            address: '',
            age:'',
            phone: ''
        }
    )

    const getData = (e) =>{
        setUserInfo({...userInfo, [e.target.name] : e.target.value})
        console.log(userInfo)
    }

  return (
    <div>
        <h1>Form three</h1>

        Name: <input name='name' value={userInfo.name} onChange={getData} type='text' /><br /><br />
        Address: <input name='address' value={userInfo.address} onChange={getData} type='text' /><br /><br />
        Age: <input name='age' value={userInfo.age} onChange={getData} type='text' /><br /><br />
        Phone: <input name='phone' value={userInfo.phone} onChange={getData} type='text' /><br /><br />

        <h1>Name: {userInfo.name}</h1>
        <h1>Address: {userInfo.address}</h1>
        <h1>Age: {userInfo.age}</h1>
        <h1>Phone: {userInfo.phone}</h1>


    </div>
  )
}

export default Formthree