import React from 'react'
import {ChevronLeftIcon} from '@heroicons/react/24/solid'
import { useState } from 'react'

const NoteList = () => {
  const initialData= Object.freeze({
    title:'',
    desc:''
  })
  const[inputData, setInputData]=useState(initialData)

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(inputData)
  
  }
  const handleChange=(e)=>{
    setInputData({...inputData, [e.target.name]:e.target.value})
  }
  return (
    <div className='text-indigo-500 px-4'>
        <div className='flex justify-between'>
          <div className='h-6 w-6'>
            <ChevronLeftIcon/>
          </div>
          <div onClick={handleSubmit} className='cursor-pointer'>Done</div>
        </div>
        <div className='mt-2'>
          <div className='mb-4'>
            <label htmlFor="title" className='block'>Title</label>
            <input type="text" name='title' value={inputData.title} onChange={handleChange} className='w-full bg-gray-600 outline-none rounded px-2 py-2'/>
          </div>
          <div>
            <label htmlFor="descriptio" className='block'>Description</label>
            <textarea name="desc" id="" value={inputData.desc} onChange={handleChange} className='w-full bg-gray-600 outline-none rounded px-2 py-2'></textarea>
          </div>
        </div>
    </div>
  )
}

export default NoteList