'use client';

import './styles.css';
import '../globals.css'; // Import global.css
import ForecastCard from './ForecastCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherBackground from '../Components/page';
import WeatherMap from './WeatherMap'; // Import WeatherMap
import Footer from '../Components/footer.jsx'; // Correct import path for Footer

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
    <WeatherBackground>
      <div className="full-screen">
        {/* 2-Hour Forecast heading */}
        <h1 className="title">2-Hour Weather Forecast</h1>
        {/* Display Weather Map at the top */}
        <WeatherMap />

        {/* 4-Day Forecast heading */}
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
      <Footer /> {/* Add Footer component */}
    </WeatherBackground>
  );
};

export default ForecastPage;