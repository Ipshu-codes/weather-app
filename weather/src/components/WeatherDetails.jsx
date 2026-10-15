
function WeatherDetails({ weather }) {
  return (
    <div className="details">
      <div>
        <span>💧</span>
        <p>Humidity</p>
        <strong>{weather.relative_humidity_2m}%</strong>
      </div>

      <div>
        <span>💨</span>
        <p>Wind speed</p>
        <strong>{weather.wind_speed_10m} km/h</strong>
      </div>

      <div>
        <span>🌧️</span>
        <p>Precipitation</p>
        <strong>{weather.precipitation} mm</strong>
      </div>
    </div>
  );
}

export default WeatherDetails;
