'use client';

import React from 'react';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Circle, Tooltip } from 'react-leaflet';

export default function TemperatureMapPage() {
  const [temperatureData, setTemperatureData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  // Fetch air temperature data from the API
  const fetchTemperatureData = async () => {
    try {
      const response = await fetch('https://api.data.gov.sg/v1/environment/air-temperature');
      const data = await response.json();

      // Check the data structure and log it
      console.log("Fetched data:", data);

      if (data.items && data.items.length > 0) {
        const stations = data.metadata.stations;
        const readings = data.items[0].readings;

        // Map station names, coordinates, and temperature values
        const mappedData = readings.map(reading => {
          const station = stations.find(s => s.id === reading.station_id);
          return {
            name: station.name,
            latitude: station.location.latitude,
            longitude: station.location.longitude,
            value: reading.value || 0, // Handle null values
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

  // Fetch data when the component mounts
  useEffect(() => {
    fetchTemperatureData();

    // Refresh data every 5 minutes
    const interval = setInterval(fetchTemperatureData, 300000);
  }, []);

  return (
    <div>
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <MapContainer center={[1.3521, 103.8198]} zoom={12} style={{ height: '1150px', width: '100%' }}>
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
  );
}