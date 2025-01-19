'use client';

import './styles.css';
import ForecastCard from './ForecastCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ForecastPage = () => {
  const [forecasts, setForecasts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForecast = async () => {
      const options = {
        method: 'GET',
        url: 'https://api-open.data.gov.sg/v2/real-time/api/four-day-outlook',
      };

      try {
        const { data } = await axios.request(options);
        if (data?.data?.records?.[0]?.forecasts) {
          setForecasts(data.data.records[0].forecasts);
        } else {
          setError('No forecast data available');
        }
      } catch (err) {
        setError('Error fetching weather data');
        console.error(err);
      }
    };

    fetchForecast();
  }, []);

  return (
    <div className="container">
      <h1 className="title">4-Day Weather Forecast</h1>
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="forecastContainer">
          {forecasts.map((day, index) => (
            <ForecastCard key={index} day={day} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ForecastPage;


