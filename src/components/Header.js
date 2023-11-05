import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleSideBar } from '../utils/slice/appSlice'

function Header() {
  const dispatch = useDispatch()
  const handleTogleHamburger = () => {
    console.log('first')
    dispatch(toggleSideBar());
  }
  return (
    <div className='flex h-12 border shadow-sm justify-around p-2'>
      <img 
      onClick={() => handleTogleHamburger()} 
      alt="hamburger" src="https://flyclipart.com/thumb2/-hamburger-menu-list-menu-icon-842779.png" />
      <img alt='youtube' src='https://th.bing.com/th?id=OIP._IfEaUssjZQwZ1u92b1_GgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' />
      <input className='w-125' />
      <img alt="search" src='https://www.pinclipart.com/picdir/middle/485-4851736_free-png-search-icon-search-icon-free-download.png' />
      <img alt='profile' src='https://www.pngall.com/wp-content/uploads/5/Profile.png' />   </div>
  )
}

export default Header