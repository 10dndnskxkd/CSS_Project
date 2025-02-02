const weatherIcons = {
  SH: '/images/shower.png', // Showers
  TL: '/images/thunderstorm.png', // Thundery Showers
  CL: '/images/cloudy.png', // Cloudy
  SU: '/images/sunny.png', // Sunny
};

const ForecastCard = ({ day }) => {
  const { forecast, temperature, relativeHumidity, wind } = day;
  const iconSrc = weatherIcons[forecast.code] || '/images/cloudy.png'; // Default to cloudy

  return (
    <div className="card">
      <h2>{day.day}</h2>
      <img src={iconSrc} alt={forecast.text} className="weather-icon" />
      <p><strong>Forecast:</strong> {forecast.summary}</p>
      <p>
        <strong>Temperature:</strong> {temperature.low}°C - {temperature.high}°C
      </p>
      <p>
        <strong>Humidity:</strong> {relativeHumidity.low}% - {relativeHumidity.high}%
      </p>
      <p>
        <strong>Wind:</strong> {wind.speed.low} - {wind.speed.high} km/h, {wind.direction}
      </p>
    </div>
  );
};

export default ForecastCard;

