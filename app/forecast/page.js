// Damian & Theresa

"use client"; // Ensures this component runs in a client-side environment

import './styles.css';
import '../globals.css'; // Import global styles
import ForecastCard from './ForecastCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherBackground from '../Components/page'; // Wrapper for weather-related UI
import WeatherMap from './WeatherMap'; // Displays a weather map
import Footer from '../Components/footer.jsx'; // Footer component

const ForecastPage = () => {
  // State to store forecast data
  const [forecasts, setForecasts] = useState([]);
  // State to store any error messages
  const [error, setError] = useState(null);

  // Fetch weather forecast data when the component mounts
  useEffect(() => {
    const fetchForecast = async () => {
      const options = {
        method: 'GET',
        url: 'https://api-open.data.gov.sg/v2/real-time/api/four-day-outlook', // API endpoint for 4-day weather forecast
      };

      try {
        const { data } = await axios.request(options);
        // Check if forecast data exists before updating state
        if (data?.data?.records?.[0]?.forecasts) {
          setForecasts(data.data.records[0].forecasts);
        } else {
          setError('No forecast data available'); // Handle missing data scenario
        }
      } catch (err) {
        setError('Error fetching weather data'); // Handle API request failure
        console.error(err);
      }
    };

    fetchForecast();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <WeatherBackground> {/* Background wrapper component */}
      <div className="full-screen">
        {/* 2-Hour Forecast section */}
        <h1 className="title">2-Hour Weather Forecast</h1>
        <WeatherMap /> {/* Weather map displayed at the top */}

        {/* 4-Day Forecast section */}
        <h1 className="title">4-Day Weather Forecast</h1>
        {error ? (
          <p className="error">{error}</p> // Show error message if data fetch fails
        ) : (
          <div className="forecastContainer">
            {/* Loop through forecast data and render ForecastCard components */}
            {forecasts.map((day, index) => (
              <ForecastCard key={index} day={day} />
            ))}
          </div>
        )}
      </div>
      <Footer /> {/* Footer component */}
    </WeatherBackground>
  );
};

export default ForecastPage;
