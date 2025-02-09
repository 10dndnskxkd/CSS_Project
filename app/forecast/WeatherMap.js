'use client';

import React, { useEffect, useState } from 'react'; // Import React hooks
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS for map styling
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // Import Leaflet components
import L from 'leaflet'; // Import Leaflet library for map functionality

// Helper function to fetch weather data from the API
const fetchWeatherData = async () => {
  try {
    // Make API call to fetch real-time weather data
    const response = await fetch('https://api-open.data.gov.sg/v2/real-time/api/two-hr-forecast');
    const data = await response.json(); // Parse the response as JSON
    return data; // Return the data if successful
  } catch (error) {
    console.error('Failed to fetch weather data:', error); // Log any errors if the API call fails
    return null; // Return null in case of an error
  }
};

// Helper function to determine if it's night time based on the current hour
const isNightTime = () => {
  const currentHour = new Date().getHours(); // Get the current hour of the day
  return currentHour >= 18 || currentHour < 7; // Consider 6 PM to 7 AM as night time
};

// Helper function to return the correct weather icon based on forecast and time of day
const getWeatherImage = (forecast) => {
  const nightTime = isNightTime(); // Determine if it's night time

  // Switch case to determine the icon URL based on forecast and time of day (night/day)
  if (nightTime) {
    switch (forecast) {
      case 'Partly Cloudy (Night)':
        return '/images/forecast/night_cloudy.png'; // Return the night cloudy icon
      case 'Passing Showers':
        return '/images/forecast/night_shower.png'; // Return the night shower icon
      case 'Thunderstorm':
        return '/images/forecast/thunderstorm.png'; // Return the thunderstorm icon
      case 'Clear':
        return '/images/forecast/night.png'; // Return the night clear sky icon
      default:
        return '/images/forecast/night.png'; // Default to night clear sky icon
    }
  } else {
    // Daytime forecast icons
    switch (forecast) {
      case 'Partly Cloudy (Day)':
        return '/images/forecast/cloudy.png'; // Return the cloudy icon for daytime
      case 'Passing Showers':
        return '/images/forecast/shower.png'; // Return the shower icon for daytime
      case 'Thunderstorm':
        return '/images/forecast/thunderstorm.png'; // Return the thunderstorm icon
      case 'Clear':
        return '/images/forecast/sunny.png'; // Return the sunny icon for daytime
      default:
        return '/images/forecast/sunny.png'; // Default to sunny icon for daytime
    }
  }
};

const WeatherMap = () => {
  const [locations, setLocations] = useState([]); // State to hold location data
  const [forecastData, setForecastData] = useState([]); // State to hold forecast data

  // Fetch the data when the component is mounted
  useEffect(() => {
    const getData = async () => {
      const data = await fetchWeatherData(); // Fetch the weather data
      if (data && data.data) {
        setLocations(data.data.area_metadata); // Set the location metadata (coordinates)
        setForecastData(data.data.items[0].forecasts); // Set the forecast data
      }
    };

    getData(); // Call the function to fetch data
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
      <div style={{ width: '80%', height: '500px', border: '2px solid #ccc', borderRadius: '8px' }}>
        {/* Map container */}
        <MapContainer center={[1.3521, 103.8198]} zoom={12} style={{ height: '100%', width: '100%' }}>
          {/* OpenStreetMap tile layer */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Loop through each location and display a Marker */}
          {locations.map((location) => {
            const forecast = forecastData.find(f => f.area === location.name); // Find the forecast for the current location
            return (
              forecast && (
                <Marker
                  key={location.name} // Use location name as the key
                  position={[location.label_location.latitude, location.label_location.longitude]} // Set the position based on latitude and longitude
                  icon={L.icon({
                    iconUrl: getWeatherImage(forecast.forecast), // Use the helper function to get the weather icon
                    iconSize: [50, 50], // Set the icon size
                    iconAnchor: [25, 25], // Anchor the icon in the center
                    popupAnchor: [0, -25], // Position the popup above the icon
                  })}
                >
                  {/* Popup to show location name and forecast */}
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

export default WeatherMap; // Export the component to be used in other parts of the application
