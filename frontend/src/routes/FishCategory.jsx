import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './FishCategory.css'



function FishCategory() {
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
    <h1 className='flex justify-center items-center mt-5'>Fish Category</h1>
    <div className='mx-6 md:mx-12 lg:mx-24 xl:mx-32'>
    <div>{fishCategory.map(fish => (
        <div key={fish.id}>
            <p className='text-3xl font-bold m-5'>{fish.name}</p>
            <div className='flex justify-center items-center mt-10 mb-10'>

            <button className='thick-arrow-left onClick={() => handleLeftArrow()} mx-5' />
            <img className="max-h-64" src={fish.image1} />
            <img className="max-h-64" src={fish.image2} />
            <img className="max-h-64" src={fish.image3} />
            <img className="max-h-64" src={fish.image4} />
            <img className="max-h-64" src={fish.image5} />
            <button className='thick-arrow-right onClick={() => handleRightArrow()} mx-5' />

            </div>
           <p className='mb-16 mx-6 md:mx-16 lg:mx-20 xl:mx-24'>{fish.description}</p>
        </div>
    ))}
    </div>
    </div>
    </>
  )
}




export default FishCategory
