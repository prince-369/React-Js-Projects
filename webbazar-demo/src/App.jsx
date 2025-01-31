import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import All from "./components/All.jsx";
import Home from "./pages/Home.jsx";
import ProductInfo from "./components/ProductInfo.jsx";
import Cart from "./components/Cart.jsx"; 
import { CartProvider } from "./components/CartContext.jsx"; 
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<All />} />
          <Route path="/productinfo/:productId" element={<ProductInfo />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;