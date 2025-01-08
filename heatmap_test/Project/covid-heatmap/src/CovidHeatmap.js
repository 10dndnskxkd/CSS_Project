// src/CovidHeatmap.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

const fetchCovidData = async () => {
  const response = await axios.get('https://api.covid19api.com/total/country/sg'); // You can change this API to another
  return response.data;
};

const CovidHeatmap = () => {
  const [covidData, setCovidData] = useState([]);
  const [heatmapData, setHeatmapData] = useState([]);

  useEffect(() => {
    const getCovidData = async () => {
      const data = await fetchCovidData();
      setCovidData(data);
    };

    getCovidData();
  }, []);

  useEffect(() => {
    if (covidData.length > 0) {
      const heatmapPoints = covidData.map(item => [
        item.Latitude, 
        item.Longitude, 
        item.Confirmed // The intensity is based on confirmed cases
      ]);
      setHeatmapData(heatmapPoints);
    }
  }, [covidData]);

  return (
    <div style={{ height: '100vh' }}>
      <MapContainer center={[37.7749, -122.4194]} zoom={6} scrollWheelZoom={true} style={{ height: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {heatmapData.length > 0 && (
          <L.heatLayer points={heatmapData} radius={25} blur={15} maxZoom={17} />
        )}
      </MapContainer>
    </div>
  );
};

export default CovidHeatmap;
