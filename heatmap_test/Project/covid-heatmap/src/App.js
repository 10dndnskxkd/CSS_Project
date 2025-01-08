import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';

const App = () => {
  const [covidData, setCovidData] = useState(null);

  useEffect(() => {
    const fetchCovidData = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://covid-19-by-api-ninjas.p.rapidapi.com/v1/covid19',
          params: { country: 'Singapore' }, 
          headers: {
            'x-rapidapi-key': 'd48b85318bmsh62493b214e8775fp116a1ejsne1b0e1c7597d', 
            'x-rapidapi-host': 'covid-19-by-api-ninjas.p.rapidapi.com'
          }
        };

        const response = await axios.request(options);
        console.log(response.data);

        // Flatten the data and extract daily cases
        const data = response.data[0]; // First item in the response (since it's an array)
        const dailyCases = Object.keys(data)
          .filter(date => date !== 'country' && date !== 'region') // Filter out unwanted fields
          .map(date => ({
            date: date,
            total: data[date].total,
            new: data[date].new
          }));

        setCovidData(dailyCases); // Set the state with the data
      } catch (error) {
        console.error('Error fetching COVID data:', error);
      }
    };

    fetchCovidData(); // Trigger data fetching when the component mounts
  }, []);

  if (!covidData) {
    return <div>Loading...</div>; // Display loading state while data is being fetched
  }

  return (
    <div className="App">
      <h1>Covid Heatmap for Singapore</h1>
      <MapContainer center={[1.3521, 103.8198]} zoom={10} style={{ height: '100vh' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        <Marker position={[1.3521, 103.8198]}>
          <Popup>
            <h2>COVID-19 Data for Singapore</h2>
            <ul>
              {covidData.map((item, index) => (
                <li key={index}>
                  <strong>Date:</strong> {item.date}<br />
                  <strong>Total Cases:</strong> {item.total}<br />
                  <strong>New Cases:</strong> {item.new}
                </li>
              ))}
            </ul>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default App;

