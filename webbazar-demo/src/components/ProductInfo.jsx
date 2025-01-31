import React, { useState , useContext } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
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

function ProductInfo() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart, showPopup } = useContext(CartContext);

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="product-info-container">
      <button className="back-button" onClick={() => window.history.back()}>
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </button>

      <div className="image-carousel">
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="product-image"
        />
        <button className="carousel-button prev" onClick={handlePrevImage}>
          &#10094;
        </button>
        <button className="carousel-button next" onClick={handleNextImage}>
          &#10095;
        </button>
      </div>

      <div className="product-details">
        <h1>{product.name}</h1>
        <div className="price-rating">
          <p className="price">
            ₹{product.price}{" "}
            <span className="discount">({product.discount}% off)</span>
          </p>
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className={index < Math.floor(product.rating) ? "star-filled" : "star-empty"}
              />
            ))}
            <span>({product.rating})</span>
          </div>
        </div>
        <p className="description">{product.description}</p>
      </div>

      {showPopup && (
        <div className="popup">
          <p>Your Item has Been Added to Cart</p>
        </div>
      )}
      <div className="action-buttons">
      <button className="add-to-cart" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
        <button className="buy-now">Buy Now</button>
      </div>
    </div>
  );
}

export default ProductInfo;