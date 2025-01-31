import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../components/CartContext.jsx";
import All from "../components/All.jsx";
import "../App.css";

function Home() {
  const { cart } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState("");
  // const location = useLocation(); 

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const handleSearch = debounce((query) => {
    setSearchQuery(query);
  }, 300);

  return (
    <div>
      <h1 className="heading">WebBazar --v Demo</h1>

      
      <div className="cart-icon">
        <Link to="/cart" className="cart-link">
          <FontAwesomeIcon icon={faShoppingCart} />
          {cart.length > 0 && (
            <span className="cart-count">{cart.length}</span>
          )}
        </Link>
      </div>

      <input
        type="text"
        className="search-bar"
        placeholder="Search your Choice..."
        onChange={(e) => handleSearch(e.target.value)} 
      />

      {/* Navbar */}
      {/* <nav className="navbar">
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">All</Link>
          </li>
          <li className={location.pathname === "/websites" ? "active" : ""}>
            <Link to="/websites">Websites</Link>
          </li>
          <li className={location.pathname === "/projects" ? "active" : ""}>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav> */}

      
      <All searchQuery={searchQuery} />
    </div>
  );
}

export default Home;