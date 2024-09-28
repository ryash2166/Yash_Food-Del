import React, { useContext } from 'react'
import './cart.css'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
const Cart = () => {

  const {cartItems, food_list, removeToCart , getTotalCartAmount , url } = useContext(StoreContext)

  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item , index) => {
          if(cartItems[item._id] > 0){
            return(
              <div key={index}>
                <div className='cart-items-title cart-items-item'>
                  <img src={url + "/images/" + item.image} alt="Item_Image" />
                  <p>{item.name}</p>
                  <p>$ {item.price}.00</p>
                  <p>{cartItems[item._id]}</p>
                  <p>$ {item.price * cartItems[item._id]}.00</p>
                  <p onClick={() => removeToCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>$ {getTotalCartAmount()}.00</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery Fees</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}.00</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>$ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}.00</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='Promo Code...' />
              <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
