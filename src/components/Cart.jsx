import React from "react";
import "./cart.css";

// Example props: cart = [{id, name, price, image}, ...]
const Cart = ({ cart }) => {
     const isEmpty = cart.length === 0;

     return (
          <div className="cart-container">
               <div className="cart-header">
                    <img
                         src="/assets/images/cart_icon.png"
                         alt="Cart"
                         className="cart-icon"
                    />
                    <h2>Your Cart</h2>
               </div>
               {isEmpty ? (
                    <div className="cart-empty">
                         <p>Your cart is empty.</p>
                    </div>
               ) : (
                    <ul className="cart-list">
                         {cart.map((item) => (
                              <li key={item.id} className="cart-item">
                                   <img
                                        src={item.image}
                                        alt={item.name}
                                        className="cart-item-image"
                                   />
                                   <div className="cart-item-details">
                                        <span className="cart-item-name">
                                             {item.name}
                                        </span>
                                        <span className="cart-item-price">
                                             ${item.price}
                                        </span>
                                   </div>
                              </li>
                         ))}
                    </ul>
               )}
          </div>
     );
};

export default Cart;
