import React from 'react'
import { Link } from 'react-router-dom'
import Data from '../Data'
import NoteProps from './NoteProps'

const NotePage = () => {
  return (
    <div>
    <div className='text-indigo-500 flex items-center justify-between px-4 py-2'>
        <div className='font-bold text-lg '>
            Note List
        </div>
        <div className='font-md text-base bg-indigo-500 rounded-full'>
            <span className='text-white px-2 py-2'>3</span>
        </div>
    </div>
    <div>
        {Data.map((note,index)=><NoteProps notes={note} key={index}/>)}
    </div>
        <div className='px-4 py-2 '>
            <Link to='/new'>
            <button className='bg-indigo-500 px-6 py-2 rounded-lg mb-4 tracking-wide font-bold text-white'>New Note</button>
            </Link>
        </div>
    </div>
  )
}

export default NotePage