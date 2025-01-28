import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import SearchBar from "./SearchBar";
import "./App.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("Arrah"); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = "d2b3127ea4c9488689444a7fc269ca73"; 
  const fetchWeatherData = async (city) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();

      if (data.cod === "404") {
        setError("City not found!");
        setWeatherData(null);
      } else {
        setWeatherData(data);
        setError(null);
      }
    } catch (err) {
      setError("Something went wrong!");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(location);
  }, [location]);

  return (
    <div className="app">
      <SearchBar setLocation={setLocation} />
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default App;
