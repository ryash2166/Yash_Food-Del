import React from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
            <img src={assets.add_icon} alt="Add_item_logo" />
            <p>Add Items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
            <img src={assets.list_icon} alt="Order_item_logo" />
            <p>List Items</p>
        </NavLink>
        <NavLink to='/order' className="sidebar-option" >
            <img src={assets.order_icon} alt="_item_logo" className='order' />
            <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default SideBar
