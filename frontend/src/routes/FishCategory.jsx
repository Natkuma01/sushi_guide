import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './FishCategory.css'



function FishCategory() {
  const [fishCategory, setFishCategory] = useState([])
  const [currentSlides, setCurrentSlides] = useState({})
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

  const nextSlide = (categoryId, totalImages) => {
    setCurrentSlides(prev => {
      const current = prev[categoryId] ?? 0
      const isLastSlide = current === totalImages - 1
      return { ...prev, [categoryId]: isLastSlide ? 0 : current + 1 }
    })
  }

  const prevSlide = (categoryId, totalImages) => {
    setCurrentSlides(prev => {
      const current = prev[categoryId] ?? 0
      const isFirstSlide = current === 0
      return { ...prev, [categoryId]: isFirstSlide ? totalImages - 1 : current - 1 }
    })
  }





  return (
    <>
    <p className='flex justify-center items-center my-8 mb-16 font-extrabold text-4xl'>Fish Category</p>
    <div className='mx-2 md:mx-8 lg:mx-20 xl:mx-28'>
    <div>{fishCategory.map(category => (
        <div key={category.id}>
            <p className='text-3xl font-bold m-5 hover:cursor-pointer hover:underline' onClick={() => routeChange(category.id)} >{category.name}</p>
            <div className='flex justify-center items-center'>
            <button onClick={() => nextSlide(category.id, category.image_urls.length)} className="thick-arrow-left m-5" />
           <img className='max-h-56 rounded-md drop-shadow-md my-8' src={category.image_urls[currentSlides[category.id] ?? 0]} />
          <button onClick={() => prevSlide(category.id, category.image_urls.length)} className="thick-arrow-right m-5" />
          </div>
           <p className='mb-16 mx-2 md:mx-12 lg:mx-16 xl:mx-20'>{category.description}</p>
        </div>
    ))}
    </div>
    </div>
    </>
  )
}




export default FishCategory
