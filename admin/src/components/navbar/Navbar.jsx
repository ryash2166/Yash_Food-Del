import React from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className='logo' />
      <img src={assets.profile_image} alt="Profile_Image"  className='profile'/>
    </div>
  )
}

export default Navbar
