import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Fish.css'


function fish() {
  const [fishCategory, setFishCategory] = useState([])
  
  useEffect(()=> {
    axios.get("http://127.0.0.1:8000/fishes/sushi_category/")
      .then( res => {
        setFishCategory(res.data)
      }).catch(err =>{
    console.log("error")
    })
  }, [])

  return (
    <>
    <h1 className='flex justify-center items-center mt-5'>Fish Type</h1>
    <div className='mx-6 md:mx-12 lg:mx-24 xl:mx-32'>
    <div>{fishCategory.map(fish => (
        <div key={fish.id}>
            <p className='text-3xl font-bold m-5'>{fish.name}</p>
            <button className="thick-arrow-left" />
            <img className='flex justify-center items-center max-h-64' src={fish.image1} />
            <button className="thick-arrow-right" />
           <p className='mb-16 mx-6 md:mx-16 lg:mx-20 xl:mx-24'>{fish.description}</p>
        </div>
    ))}
    </div>
    </div>
    </>
  )
}




export default fish
