import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import useWeather from "./hooks/useWeather";
import "./App.css";

function App() {
  const [city, setCity] = useState("");

  const { weather, loading, error, fetchWeather } = useWeather();

  function handleSearch(e) {
    e.preventDefault();
    fetchWeather(city);
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
          onSearch={handleSearch}
          loading={loading}
        />

        {error && <p className="error">{error}</p>}

        {weather && <WeatherDisplay weather={weather} />}
      </div>
    </main>
  );
}

export default App;