import React from 'react'
import './order.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { assets } from '../../assets/assets'
import { useEffect } from 'react'

const Order = ({url}) => {

  const [orders,setOrders] = useState([])

  const fetchAllOrders = async () => {
    const response =  await axios.get(url + "/api/order/list")
    if (response.data.success) {
      setOrders(response.data.data)
    } else {
      toast.error("Error")
    }
  }

  const statusHandler = async (event,orderId) => {
    const response  = await axios.post(url + "/api/order/status",{
      orderId,
      status:event.target.value
    })
    if (response.data.success) {
      await fetchAllOrders()
    }
    // console.log(event , orderId);
  }

  useEffect(() => {
    fetchAllOrders()
  } ,[])

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order,index) => {
          return(
          <div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt="Item_img" />
            <div>
              <p className="order-item-food">
                {order.items.map((item,index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity
                  } else {
                    return item.name + " x " + item.quantity + ", "
                  }
                })}
              </p>
              <p className="order-item-name"><b>Name : </b>{order.address.firstname + " " + order.address.lastname}</p>
              <div className="order-item-address">
                <b>
                  Address :
                </b>
                <p>{order.address.street + ", "}</p>
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode + ", " }</p>
              </div>
              <p className="order-item-phone">
                <b>
                  Contact : 
                </b>
                {order.address.phone}
              </p>
            </div>
            <p className='order-quantity'><b>Items : </b>{order.items.length}</p>
            <p><b>Amount : </b>$ {order.amount}.00</p>
            <select onChange={(event) => statusHandler(event,order._id)} value={order.status}>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        )})}
      </div>
    </div>
  )
}

export default Order
