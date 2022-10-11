import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='px-4 py-2 mb-6 font-bold text-xl text-indigo-500 border-b-2 border-indigo-500'>
       <Link to='/'>
       <h1>Note-App</h1>
       </Link>
    </div>
  )
}

export default Header