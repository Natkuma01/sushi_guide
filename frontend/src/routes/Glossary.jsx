import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Glossary = () => {

    const [name, setName] = useState([])

    useEffect(()=> {
        axios.get("http://127.0.0.1:8000/fishes/glossary/")
          .then( res => {
            setName(res.data)
          }).catch(err =>{
        console.log("error")
        })
      }, [])


    return (
        <>
        <p className='flex justify-center items-center m-8 font-extrabold text-3xl'> Fish Translation</p>
        <div className='flex justify-center items-center mt-15 mx-28'>
        <table className='table-auto border-separate border-spacing-2 border border-slate-500 min-w-full'>
          <thead>
              <tr>
                <th className='bg-red-200 text-slate-700 font-extrabold'>English name</th>
                <th className='bg-red-200 text-slate-700 font-extrabold'>Japanese name</th>
              </tr>
          </thead>
          <tbody>
              {name.map(n => (
              <tr key={n.id}>
                <td className='bg-slate-50'>{n.english}</td>
                <td className='bg-slate-100'>{n.japanese}</td>
              </tr>
                ))}
          </tbody>
        </table>
        </div>
        </>
    )
}

export default Glossary