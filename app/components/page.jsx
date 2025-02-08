'use client';

import React, { useState, useEffect } from 'react';
import './styles.css'; // Import the CSS file for styling

export default function WeatherBackground({ children }) {
    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
        async function fetchWeather() {
            const base_url = "https://api-open.data.gov.sg/v2/real-time/api/twenty-four-hr-forecast";
            const response = await fetch(base_url);
            const data = await response.json();
            const forecast = data.data.records[0]; // Get the forecast record

            // Extract the general weather forecast
            const weatherForecast = forecast.general.forecast.text;

            // Map weather forecast to corresponding background images
            switch (weatherForecast) {
                // case 'Fair':
                // case 'Fair (Day)':
                // case 'Fair (Night)':
                // case 'Fair and Warm':
                //     setBackgroundImage('/fair_weather.jpg');
                //     break;
                case 'Partly Cloudy':
                case 'Partly Cloudy (Day)':
                case 'Partly Cloudy (Night)':
                case 'Cloudy':
                    setBackgroundImage('/cloudy.webp');
                    break;
                // case 'Hazy':
                // case 'Slightly Hazy':
                //     setBackgroundImage('/hazy_weather.jpg');
                //     break;
                // case 'Windy':
                //     setBackgroundImage('/windy_weather.jpg');
                //     break;
                // case 'Mist':
                // case 'Fog':
                //     setBackgroundImage('/foggy_weather.jpg');
                //     break;
                case 'Light Rain':
                case 'Moderate Rain':
                case 'Heavy Rain':
                case 'Passing Showers':
                case 'Light Showers':
                case 'Showers':
                case 'Heavy Showers':
                    setBackgroundImage('/raining.avif');
                    break;
                case 'Thundery Showers':
                case 'Heavy Thundery Showers':
                case 'Heavy Thundery Showers with Gusty Winds':
                    setBackgroundImage('/thunder_storm.webp');
                    break;
                default:
                    setBackgroundImage('/default.webp');
            }
        }

        fetchWeather();
    }, []);

    return (
        <div
            className="background-container"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed', // This keeps the background fixed while scrolling
                minHeight: '100vh', // Ensure the background covers the full viewport height
            }}
        >
            {/* Dark overlay for better text readability */}
            <div className="background-overlay"></div>
            
            {/* Page content */}
            <div className="content">
                {children}
            </div>
        </div>
    );
}