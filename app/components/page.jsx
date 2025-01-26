'use client';

import React, { useState, useEffect } from 'react';

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
                    setBackgroundImage('/cloudy.jpg');
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
                // case 'Light Rain':
                //     setBackgroundImage('/light_rain.jpg');
                //     break;
                // case 'Moderate Rain':
                //     setBackgroundImage('/moderate_rain.jpg');
                //     break;
                // case 'Heavy Rain':
                //     setBackgroundImage('/heavy_rain.jpg');
                //     break;
                // case 'Passing Showers':
                //     setBackgroundImage('/passing_showers.jpg');
                //     break;
                // case 'Light Showers':
                //     setBackgroundImage('/light_showers.jpg');
                //     break;
                // case 'Showers':
                //     setBackgroundImage('/showers.jpg');
                //     break;
                // case 'Heavy Showers':
                //     setBackgroundImage('/heavy_showers.jpg');
                //     break;
                case 'Thundery Showers':
                case 'Heavy Thundery Showers':
                case 'Heavy Thundery Showers with Gusty Winds':
                    setBackgroundImage('/thunder_storm.jpeg');
                    break;
                default:
                    setBackgroundImage('/default.jpg');
            }
        }

        fetchWeather();
    }, []);

    return (
        <div
            style={{
                height: '100vh',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {children}
        </div>
    );
}
