// Theresa

'use client'; // Enables client-side rendering for Next.js

import React, { useState, useEffect } from 'react';
import './styles.css'; // Import the CSS file for styling

export default function WeatherBackground({ children }) {
    const [backgroundImage, setBackgroundImage] = useState(''); // State to store background image URL

    useEffect(() => {
        async function fetchWeather() {
            // API endpoint for real-time 24-hour weather forecast
            const base_url = "https://api-open.data.gov.sg/v2/real-time/api/twenty-four-hr-forecast";
            const response = await fetch(base_url); // Fetch weather data
            const data = await response.json(); // Parse JSON response
            const forecast = data.data.records[0]; // Get the forecast record

            // Extract the general weather forecast
            const weatherForecast = forecast.general.forecast.text;

            // Map weather forecast to corresponding background images
            switch (weatherForecast) {
                case 'Fair (Day)':
                    setBackgroundImage('/fair_day.jpg'); // Set background for fair daytime weather
                    break;
                case 'Fair (Night)':
                    setBackgroundImage('/fair_night.avif'); // Set background for fair nighttime weather
                    break;
                case 'Partly Cloudy':
                case 'Partly Cloudy (Day)':
                case 'Partly Cloudy (Night)':
                case 'Cloudy':
                    setBackgroundImage('/cloudy.webp'); // Set background for cloudy weather
                    break;
                case 'Light Rain':
                case 'Moderate Rain':
                case 'Heavy Rain':
                case 'Passing Showers':
                case 'Light Showers':
                case 'Showers':
                case 'Heavy Showers':
                    setBackgroundImage('/raining.avif'); // Set background for rainy weather
                    break;
                case 'Thundery Showers':
                case 'Heavy Thundery Showers':
                case 'Heavy Thundery Showers with Gusty Winds':
                    setBackgroundImage('/thunder_storm.webp'); // Set background for thunderstorms
                    break;
                default:
                    setBackgroundImage('/default.webp'); // Set default background for unspecified weather
            }
        }

        fetchWeather(); // Call the function to fetch weather on component mount
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts

    return (
        <div
            className="background-container"
            style={{
                backgroundImage: `url(${backgroundImage})`, // Set dynamic background image
                backgroundSize: 'cover', // Cover the entire viewport
                backgroundPosition: 'center', // Center the image
                backgroundRepeat: 'no-repeat', // Prevent image repetition
                backgroundAttachment: 'fixed', // Keeps the background fixed while scrolling
                minHeight: '100vh', // Ensure the background covers the full viewport height
            }}
        >
            {/* Dark overlay for better text readability */}
            <div className="background-overlay"></div>
            
            {/* Page content */}
            <div className="content">
                {children} {/* Render children components inside */}
            </div>
        </div>
    );
}
