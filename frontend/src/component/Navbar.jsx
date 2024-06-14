import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
    <div className='w-60 bg-red-300 fixed h-full flex flex-col gap-4 pt-16 items-center'>
    <p className='text-neutral-600'><Link to='/'>Home</Link></p>
    <p className='text-neutral-600'><Link to='/sushitype'>Sushi Types</Link></p>
    <p className='text-neutral-600'><Link to='/fish'>Fish</Link></p>
    <p className='text-neutral-600'><Link to='/glossary'>Sushi Translation</Link></p>

    </div>
    </div>
  )
}

export default Navbar