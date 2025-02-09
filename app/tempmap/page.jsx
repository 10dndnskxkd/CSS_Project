//xander

'use client';

import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import '../globals.css';
import './styles.css';
import Footer from '../Components/footer.jsx';
import { MapContainer, TileLayer, Circle, Tooltip } from 'react-leaflet';

function DateTimeDisplay() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className="date-time-display">{currentTime}</div>;
}

export default function TemperatureMapPage() {
  const [temperatureData, setTemperatureData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchTemperatureData = async () => {
    try {
      const response = await fetch('https://api.data.gov.sg/v1/environment/air-temperature');
      const data = await response.json();

      console.log("Fetched data:", data);

      if (data.items && data.items.length > 0) {
        const stations = data.metadata.stations;
        const readings = data.items[0].readings;

        const mappedData = readings.map(reading => {
          const station = stations.find(s => s.id === reading.station_id);
          return {
            name: station.name,
            latitude: station.location.latitude,
            longitude: station.location.longitude,
            value: reading.value || 0,
          };
        });

        if (mappedData.length === 0) {
          setErrorMessage('No temperature data available for display.');
        } else {
          setTemperatureData(mappedData);
        }
      } else {
        setErrorMessage('No temperature data available.');
      }
    } catch (error) {
      console.error('Failed to fetch air temperature data:', error);
      setErrorMessage('Failed to load air temperature data. Please try again later.');
    }
  };

  useEffect(() => {
    // Check if the page has been refreshed already
    if (!localStorage.getItem('hasRefreshed')) {
      // Set the flag to prevent further refreshes
      localStorage.setItem('hasRefreshed', 'true');
      window.location.reload(); // Refresh the page once
    } else {
      fetchTemperatureData(); // Fetch data after the page has been refreshed
    }

    // Refresh the data every 5 minutes
    const interval = setInterval(fetchTemperatureData, 300000);
    return () => clearInterval(interval);

  }, []);

  return (
    <div className="page-container">
      <div className="map-container">
        <DateTimeDisplay /> {/* Render DateTimeDisplay component immediately */}
        {errorMessage ? ( //if have error message, display it, else continue 
          <p>{errorMessage}</p>
        ) : (
          <MapContainer center={[1.354372, 103.833816]} zoom={12} className="map">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {temperatureData.map((station, index) => (
              <Circle
                key={index}
                center={[station.latitude, station.longitude]}
                radius={1500}
                color="blue"
                fillColor="blue"
                fillOpacity={0.4}
              >
                <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
                  <span>{station.name}: {station.value}°C</span>
                </Tooltip>
              </Circle>
            ))}
          </MapContainer>
        )}
      </div>
      <Footer />
    </div>
  );
}
