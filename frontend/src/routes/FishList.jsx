import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function FishList() {
  const { categoryId } = useParams();
  const [fishes, setFishes] = useState([]);
  const [categoryName, setCategoryName] = useState("");

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

  return (
    <>
      <h1 className='flex justify-center items-center mt-5'>{categoryName} Family</h1>
      <div className='mx-6 md:mx-12 lg:mx-24 xl:mx-32'>
        {fishes.map(fish => (
          <div key={fish.id}>
            <p className='text-3xl font-bold m-5'>{fish.name}</p>
            <div className='flex justify-center items-center mt-10 mb-10'>
              {fish.image1 && <img className="max-h-64" src={fish.image1} alt={fish.name} />}
              {fish.image2 && <img className="max-h-64" src={fish.image2} alt={fish.name} />}
              {fish.image3 && <img className="max-h-64" src={fish.image3} alt={fish.name} />}
            </div>
            <p className='mb-16 mx-6 md:mx-16 lg:mx-20 xl:mx-24'>{fish.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default FishList;
