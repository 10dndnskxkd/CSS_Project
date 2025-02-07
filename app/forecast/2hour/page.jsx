'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherBackground from "../../Components/page";
import styles from './WeatherForecast.module.css';  // Import the CSS file

function WeatherForecast() {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  const [forecastPeriod, setForecastPeriod] = useState('');

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await axios.get('https://api-open.data.gov.sg/v2/real-time/api/two-hr-forecast');
        const data = response.data.data.items[0];
        setForecastPeriod(data.valid_period.text);

        // Sort the forecast data alphabetically by the area
        const sortedForecast = data.forecasts.sort((a, b) => a.area.localeCompare(b.area));
        setForecastData(sortedForecast);
        setLoading(false);
      } catch (err) {
        setError('Error fetching data');
        setLoading(false);
      }
    }

    fetchWeather();

    // Update current time every minute
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 60000);

    return () => clearInterval(interval);  // Clean up on component unmount
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <WeatherBackground>
    <div className={styles.container}>
      <h1 className={styles.title}>Weather Forecast</h1>
      
      <div className={styles.currentTime}>
        <p>Current Time: {currentTime}</p>
      </div>

      <div className={styles.forecastTime}>
        <p>
          Forecast Period: {forecastPeriod}
        </p>
      </div>

      <ul className={styles.forecastList}>
        {forecastData.map((item, index) => (
          <li key={index} className={styles.forecastItem}>
            <strong>{item.area}</strong>: {item.forecast}
          </li>
        ))}
      </ul>
    </div>
    </WeatherBackground>
  );
}

export default WeatherForecast;
