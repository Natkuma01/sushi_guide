import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FishCategory.css'
import { useParams } from 'react-router-dom';

function FishList() {
  const { categoryId } = useParams()
  const [fishes, setFishes] = useState([])
  const [categoryName, setCategoryName] = useState("")
  const [current, setCurrent] = useState(0)


  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/fishes/fish_category/${categoryId}/fishes/`)
      .then(res => {
        setFishes(res.data);
      }).catch(err => {
        console.log("error");
      });

    axios.get(`http://127.0.0.1:8000/fishes/fish_category/${categoryId}/`)
      .then(res => {
        setCategoryName(res.data.name);
      }).catch(err => {
        console.log("error");
      });
  }, [categoryId]);

  const nextSlide = () => {
    const isLastSlide = current === 2
    const newIndex = isLastSlide ? 0: current + 1
    setCurrent(newIndex)
  }

  const prevSlide = () => {
    const isFirstSlide = current === 0
    const newIndex = isFirstSlide ? 2 : current - 1
    setCurrent(newIndex)
  }

  return (
    <>
      <p className='flex justify-center items-center mt-5'>{categoryName} Family</p>
      <div className='mx-6 md:mx-12 lg:mx-24 xl:mx-32'>
        {fishes.map(fish => (
          <div key={fish.id}>
            <p className='text-3xl font-bold m-5'>{fish.name}</p>
            <div className='flex justify-center items-center'>
            <button onClick={nextSlide} className="thick-arrow-left m-5" />
           <img className='max-h-56 rounded-md drop-shadow-md my-8' src={fish.image_urls[current]} />
          <button onClick={prevSlide} className="thick-arrow-right m-5" />
          </div>
            <p className='mb-3 mx-6 md:mx-10 lg:mx-10 xl:mx-18'>{fish.description}</p>
            <p className='mb-3 mx-6 md:mx-10 lg:mx-10 xl:mx-18'>Taste: {fish.taste}</p>
            <p className='mb-16 mx-6 md:mx-10 lg:mx-10 xl:mx-18'>Texture: {fish.texture}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default FishList;
