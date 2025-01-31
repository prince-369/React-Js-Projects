import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext.jsx";
import "../App.css";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is the description for Product 1.",
    price: 499,
    discount: 20,
    rating: 4.5,
    images: [
      "https://img.freepik.com/free-vector/business-concept-landing-page-with-people_23-2148351698.jpg?uid=R159235966&ga=GA1.1.12750729.1726560189&semt=ais_hybrid",
      "https://img.freepik.com/free-psd/forests-day-landing-page-template-with-photo_23-2148881411.jpg?uid=R159235966&ga=GA1.1.12750729.1726560189&semt=ais_hybrid",
      "https://img.freepik.com/free-psd/let-s-go-hiking-landing-page-screen_23-2148511267.jpg?uid=R159235966&ga=GA1.1.12750729.1726560189&semt=ais_hybrid",
      "https://img.freepik.com/free-psd/brunch-concept-website-template_23-2148465816.jpg?uid=R159235966&ga=GA1.1.12750729.1726560189&semt=ais_hybrid",
    ],
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is the description for Product 2.",
    price: 799,
    discount: 15,
    rating: 4.0,
    images: [
      "https://img.freepik.com/free-psd/flat-design-plant-care-landing-page_23-2150291375.jpg?uid=R159235966&ga=GA1.1.12750729.1726560189&semt=ais_hybrid",
      "https://img.freepik.com/free-psd/hiking-concept-with-girl-landing-page_23-2148471457.jpg?uid=R159235966&ga=GA1.1.12750729.1726560189&semt=ais_hybrid",
      "https://img.freepik.com/free-vector/flat-interior-design-home-decor-landing-page-template_23-2149613101.jpg?uid=R159235966&ga=GA1.1.12750729.1726560189&semt=ais_hybrid",
      "https://img.freepik.com/free-psd/indonesian-cuisine-website-template_23-2149208785.jpg?uid=R159235966&ga=GA1.1.12750729.1726560189&semt=ais_hybrid",
    ],
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is the description for Product 3.",
    price: 999,
    discount: 18,
    rating: 4.5,
    images: [
      "https://img.freepik.com/free-psd/restaurant-landing-page-template_23-2148466849.jpg?uid=R159235966&ga=GA1.1.12750729.1726560189&semt=ais_hybrid",
      "https://img.freepik.com/free-psd/let-s-go-hiking-landing-page-screen_23-2148511267.jpg?uid=R159235966&ga=GA1.1.12750729.1726560189&semt=ais_hybrid",
      "https://img.freepik.com/free-psd/veterinary-landing-pages-concept_23-2148451973.jpg?uid=R159235966&ga=GA1.1.12750729.1726560189&semt=ais_hybrid",
      "https://img.freepik.com/free-psd/various-web-printable-templates-with-screen_23-2148450117.jpg?uid=R159235966&ga=GA1.1.12750729.1726560189&semt=ais_hybrid",
    ],
  },
  {
    id: 4,
    name: "Product 4",
    description: "This is the description for Product 4.",
    price: 1999,
    discount: 29,
    rating: 4.0,
    images: [
      "https://img.freepik.com/free-psd/italian-food-stationery-template_23-2148559232.jpg?uid=R159235966&ga=GA1.1.12750729.1726560189&semt=ais_hybrid",
      "https://img.freepik.com/free-psd/let-s-go-hiking-landing-page-screen_23-2148511267.jpg?uid=R159235966&ga=GA1.1.12750729.1726560189&semt=ais_hybrid",
      "https://img.freepik.com/free-psd/veterinary-landing-pages-concept_23-2148451973.jpg?uid=R159235966&ga=GA1.1.12750729.1726560189&semt=ais_hybrid",
      "https://img.freepik.com/free-psd/various-web-printable-templates-with-screen_23-2148450117.jpg?uid=R159235966&ga=GA1.1.12750729.1726560189&semt=ais_hybrid",
    ],
  },
  {
    id: 5,
    name: "Product 5",
    description: "This is the description for Product 5.",
    price: 1099,
    discount: 33,
    rating: 4.0,
    images: [
      "https://img.freepik.com/free-psd/modern-web-page-template-breakfast-restaurant_23-2148351347.jpg?uid=R159235966&ga=GA1.1.12750729.1726560189&semt=ais_hybrid",
      "https://img.freepik.com/free-psd/let-s-go-hiking-landing-page-screen_23-2148511267.jpg?uid=R159235966&ga=GA1.1.12750729.1726560189&semt=ais_hybrid",
      "https://img.freepik.com/free-psd/veterinary-landing-pages-concept_23-2148451973.jpg?uid=R159235966&ga=GA1.1.12750729.1726560189&semt=ais_hybrid",
      "https://img.freepik.com/free-psd/various-web-printable-templates-with-screen_23-2148450117.jpg?uid=R159235966&ga=GA1.1.12750729.1726560189&semt=ais_hybrid",
    ],
  },
  {
    id: 6,
    name: "Product 6",
    description: "This is the description for Product 6.",
    price: 2099,
    discount: 63,
    rating: 4.0,
    images: [
      "https://img.freepik.com/free-psd/template-social-media-with-coffee_23-2148469144.jpg?uid=R159235966&ga=GA1.1.12750729.1726560189&semt=ais_hybrid",
      "https://img.freepik.com/free-psd/let-s-go-hiking-landing-page-screen_23-2148511267.jpg?uid=R159235966&ga=GA1.1.12750729.1726560189&semt=ais_hybrid",
      "https://img.freepik.com/free-psd/veterinary-landing-pages-concept_23-2148451973.jpg?uid=R159235966&ga=GA1.1.12750729.1726560189&semt=ais_hybrid",
      "https://img.freepik.com/free-psd/various-web-printable-templates-with-screen_23-2148450117.jpg?uid=R159235966&ga=GA1.1.12750729.1726560189&semt=ais_hybrid",
    ],
  },
  
];

function All({ searchQuery }) {
  const { addToCart, showPopup } = useContext(CartContext);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="card-container">
      {showPopup && (
        <div className="popup">
          <p>Your Item has Been Added to Cart</p>
        </div>
      )}

      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.images[0]} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <Link to={`/productinfo/${product.id}`}>
              <button>View</button>
            </Link>
            <button className="addcart-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))
      ) : (
        <p className="no-results">No products found.</p>
      )}
    </div>
  );
}

export default All;