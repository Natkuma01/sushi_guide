import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-60 bg-red-300 flex flex-col h-full gap-4 pt-16 place-items-center'>
    <div className='text-neutral-600 hover:font-extrabold hover:text-xl'><Link to='/'>Home</Link></div>
    <div className='text-neutral-600 hover:font-extrabold hover:text-xl'><Link to='/sushitype'>Sushi Types</Link></div>
    <div className='text-neutral-600 hover:font-extrabold hover:text-xl'><Link to='/fishcategory'>Fish</Link></div>
    <div className='text-neutral-600 hover:font-extrabold hover:text-xl'><Link to='/glossary'>Sushi Translation</Link></div>
    </div>
  )
}

export default Navbar