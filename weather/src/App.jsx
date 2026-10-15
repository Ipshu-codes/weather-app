
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchWeather(e) {
    e.preventDefault();

    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      // Get the city's latitude and longitude
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
      );

      if (!geoResponse.ok) {
        throw new Error("Unable to search for the city.");
      }

      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found. Try another city.");
      }

      const place = geoData.results[0];

      // Get current weather using the coordinates
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&timezone=auto`
      );

      if (!weatherResponse.ok) {
        throw new Error("Unable to fetch weather data.");
      }

      const weatherData = await weatherResponse.json();

      setWeather({
        city: place.name,
        country: place.country,
        ...weatherData.current,
      });
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="app">
      <div className="weather-card">
        <h1>Weather App</h1>
        <p className="subtitle">
          Find out what's happening outside.
        </p>

        <SearchBar
          city={city}
          setCity={setCity}
          onSearch={fetchWeather}
          loading={loading}
        />

        {error && <p className="error">{error}</p>}

        {weather && <WeatherDisplay weather={weather} />}
      </div>
    </main>
  );
}

export default App;
