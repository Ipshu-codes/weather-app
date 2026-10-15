
import WeatherDetails from "./WeatherDetails";

function getWeatherDescription(code) {
  if (code === 0) return "Clear sky";
  if ([1, 2, 3].includes(code)) return "Partly cloudy";
  if ([45, 48].includes(code)) return "Foggy";
  if ([51, 53, 55, 56, 57].includes(code)) return "Drizzle";
  if ([61, 63, 65, 66, 67].includes(code)) return "Rainy";
  if ([71, 73, 75, 77].includes(code)) return "Snowy";
  if ([80, 81, 82].includes(code)) return "Rain showers";
  if ([85, 86].includes(code)) return "Snow showers";
  if ([95, 96, 99].includes(code)) return "Thunderstorm";

  return "Weather unavailable";
}

function WeatherDisplay({ weather }) {
  return (
    <section className="weather-result">
      <h2>
        {weather.city}, {weather.country}
      </h2>

      <p className="condition">
        {getWeatherDescription(weather.weather_code)}
      </p>

      <p className="temperature">
        {Math.round(weather.temperature_2m)}°C
      </p>

      <p>
        Feels like {Math.round(weather.apparent_temperature)}°C
      </p>

      <WeatherDetails weather={weather} />

      <p className="day-status">
        {weather.is_day ? "☀️ Daytime" : "🌙 Nighttime"}
      </p>
    </section>
  );
}

export default WeatherDisplay;
