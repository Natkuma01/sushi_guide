import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './FishCategory.css'



function FishCategory() {
  const [fishCategory, setFishCategory] = useState([])
  const navigate = useNavigate()  

  useEffect(()=> {
    axios.get("http://127.0.0.1:8000/fishes/fish_category/")
      .then( res => {
        setFishCategory(res.data)
      }).catch(err =>{
    console.log("error")
    })
  }, [])

  const routeChange = (categoryId) => {
    navigate(`/category/${categoryId}`)
  }



  return (
    <>
    <h1 className='flex justify-center items-center mt-5'>Fish Category</h1>
    <div className='mx-6 md:mx-12 lg:mx-24 xl:mx-32'>
    <div>{fishCategory.map(category => (
        <div key={category.id}>
            <p className='text-3xl font-bold m-5 hover:cursor-pointer hover:underline' onClick={() => routeChange(category.id)} >{category.name}</p>
            <div className='flex justify-center items-center mt-10 mb-10'>

            <button className='thick-arrow-left mx-5' />
            <img className="max-h-64" src={category.image1} />
            <img className="max-h-64" src={category.image2} />
            <img className="max-h-64" src={category.image3} />
            <img className="max-h-64" src={category.image4} />
            <img className="max-h-64" src={category.image5} />
            <button className='thick-arrow-right mx-5' />

            </div>
           <p className='mb-16 mx-6 md:mx-16 lg:mx-20 xl:mx-24'>{category.description}</p>
        </div>
    ))}
    </div>
    </div>
    </>
  )
}




export default FishCategory
