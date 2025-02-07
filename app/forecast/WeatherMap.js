'use client';

import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Helper function to fetch weather data
const fetchWeatherData = async () => {
  try {
    const response = await fetch('https://api-open.data.gov.sg/v2/real-time/api/two-hr-forecast'); // Replace with your API URL
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
    return null;
  }
};

// Helper function to get the appropriate image URL based on forecast status
const isNightTime = () => {
  const currentHour = new Date().getHours();
  return currentHour >= 18 || currentHour < 7; // From 6 PM to 7 AM is considered night
};

// Helper function to get the appropriate image URL based on forecast status and time of day
const getWeatherImage = (forecast) => {
  const nightTime = isNightTime(); // Determine if it's night time

  // Select weather images based on forecast and time of day (day/night)
  switch (forecast) {
    case 'Partly Cloudy (Day)':
      return nightTime ? '/images/forecast/night_cloudy.png' : '/images/forecast/cloudy.png'; 
    case 'Showers':
      return nightTime ? '/images/forecast/night_shower.png' : '/images/forecast/shower.png'; 
    case 'Thunderstorm':
      return nightTime ? '/images/forecast/thunderstorm.png' : '/images/forecast/thunderstorm.png'; 
    case 'Clear':
      return nightTime ? '/images/forecast/night.png' : '/images/forecast/sunny.png'; 
    default:
      return nightTime ? '/images/forecast/night.png' : '/images/forecast/sunny.png'; 
  }
};

const WeatherMap = () => {
  const [locations, setLocations] = useState([]);
  const [forecastData, setForecastData] = useState([]);

  // Fetch the data when the component is mounted
  useEffect(() => {
    const getData = async () => {
      const data = await fetchWeatherData();
      if (data && data.data) {
        setLocations(data.data.area_metadata); // Get area metadata (coordinates)
        setForecastData(data.data.items[0].forecasts); // Get forecasts for the items
      }
    };

    getData();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
      <div style={{ width: '80%', height: '500px', border: '2px solid #ccc', borderRadius: '8px' }}>
        <MapContainer center={[1.3521, 103.8198]} zoom={12} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {locations.map((location) => {
            const forecast = forecastData.find(f => f.area === location.name);
            return (
              forecast && (
                <Marker
                  key={location.name}
                  position={[location.label_location.latitude, location.label_location.longitude]}
                  icon={new L.Icon({
                    iconUrl: getWeatherImage(forecast.forecast), // Set the weather image as the marker icon
                    iconSize: [50, 50], // Adjust the size of the image as needed
                    iconAnchor: [25, 25], // Center the image on the marker
                    popupAnchor: [0, -25], // Position the popup above the image
                  })}
                >
                  <Popup>
                    <strong>{location.name}</strong><br />
                    Forecast: {forecast.forecast}
                  </Popup>
                </Marker>
              )
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
};

export default WeatherMap;

