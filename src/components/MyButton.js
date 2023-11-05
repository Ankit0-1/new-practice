import React from 'react'

function MyButton({name}) {
  return (
    <div>
        <button className='px-5 m-2 bg-gray-100 rounded-lg'>
          {name}
          </button>
    </div>
  )
}

export default MyButton