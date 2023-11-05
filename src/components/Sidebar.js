import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Sidebar() {
  const isOpen = useSelector((state) => state.app.isOpen);
  console.log(isOpen)
  if(!isOpen){
    return 
  }
  return (
    <>
    <div className='border p-5 shadow-lg w-48'>
      <ul>
        <li>
          <Link to="/">
          Home
          </Link>
        </li>
        <li>
          Shorts
        </li>
        <li>
          Subscription
        </li>
      </ul>
      <h1 className='font-bold pt-5'>You</h1>
      <ul>
        <li>
          Your Channel
        </li>
        <li>
          Watch History
        </li>
        <li>
          Your Videos
        </li>
      </ul>
      </div>
    </>
  )
}

export default Sidebar