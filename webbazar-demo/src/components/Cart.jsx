import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Cart() {
  const { cart, removeFromCart, clearCart, subtotal } = useContext(CartContext);
  const navigate = useNavigate(); 

  return (
    <div className="cart-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </button>

      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.images[0]} alt={item.name} />
                <div className="item-details">
                  <h2>{item.name}</h2>
                  <p>₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button
                  className="delete-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Subtotal: ₹{subtotal.toFixed(2)}</h3>
            <button className="clear-cart" onClick={clearCart}>
              Clear Cart
            </button>
            <button className="buy-all">Buy All</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;