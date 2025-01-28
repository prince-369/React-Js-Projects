import React from "react";
import { FaCloud, FaSun, FaCloudRain } from "react-icons/fa";

const WeatherCard = ({ data }) => {
  const weatherIcon = (condition) => {
    switch (condition) {
      case "Clear":
        return <FaSun />;
      case "Clouds":
        return <FaCloud />;
      case "Rain":
        return <FaCloudRain />;
      default:
        return <FaCloud />;
    }
  };

  return (
    <div className="weather-card">
      <h2>{data.name}</h2>
      <div className="weather-info">
        <div className="weather-icon">{weatherIcon(data.weather[0].main)}</div>
        <div className="temperature">{data.main.temp}°C</div>
        <div className="details">
          <p>Humidity: {data.main.humidity}%</p>
          <p>Wind Speed: {data.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
