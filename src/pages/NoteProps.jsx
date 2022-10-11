import React from 'react'

const NoteProps = ({notes}) => {
  return (
    <div className='px-4 py-2'>
        <div className='px-4 rounded  bg-gray-800 border-gray-700 py-4 mb-4 flex flex-col'>
            
                <span className='tex-xl font-bold text-indigo-500'>{notes.title}</span>
                <span className='tex-base font-medim text-indigo-500'>{notes.desc}</span>
            
        </div>
    </div>
  )
}

export default NoteProps