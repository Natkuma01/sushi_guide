import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'

function SushiType() {

  const [sushitype, setSushiType] = useState([])
  
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/sushi_types/sushi_types/')
    .then(res => {
      setSushiType(res.data)
    }).catch(err=>{
      console.log("error")
    })
  }, [])


  return (
    <>
    <div>
      <h1 className='flex justify-center items-center mt-5'>Sushi Type</h1>
      <div className='mx-6 md:mx-12 lg:mx-24 xl:mx-32'>
        {sushitype.map(type => (
          <div key={type.id}>
          <p className='text-3xl font-bold m-5'>{type.name}</p>
          <div className='flex justify-center items-center mb-5'><img className='w-full md:max-w-md lg:max-w-lg xl:max-w-xl object-cover rounded-lg drop-shadow-lg' src={type.image} alt={type.name} /></div>
          <div className='mb-16 mx-6 md:mx-16 lg:mx-20 xl:mx-24'>{type.description}</div>
          </div>
          
        ))}
      </div>
    </div>
    </>
  )
}

export default SushiType