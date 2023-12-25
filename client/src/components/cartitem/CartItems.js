import React from "react";
import { AiOutlineClose } from 'react-icons/ai'
// import dummyImage from "../../assets/naruroFrame.jpg";
import "./CartItems.scss"
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";
function CartItems({cart}) {

  const dispatch = useDispatch();
  return (
    <div className="CartItems">
      <div className="item-img">
        <img src={cart.image} alt="#" />
      </div>
      <div className="item-info-wrapper">
        <div className="item-info">
          <h4 className="title">{cart.title}</h4>
          <p className="price">₹ {cart.price}</p>
          <div className="quantity-selector">
            <span className="btn decriment" onClick={() => dispatch(removeFromCart(cart))}>-</span>
            <span className="quantity">{cart.quantity}</span>
            <span className="btn increment" onClick={()=>dispatch(addToCart(cart))}>+</span>
          </div>
          <p className="total-price">Total Price : ₹ {cart.quantity * cart.price}</p>
        </div>
        <div className="item-remove">
        <AiOutlineClose/>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
