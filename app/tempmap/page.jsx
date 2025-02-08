//xander

'use client';

import React, { useEffect, useState } from 'react'; //Import React
import 'leaflet/dist/leaflet.css'; //Import Leaflet CSS for map styling
import '../globals.css'; // Import global.css
import './styles.css'; // Import styles.css
import Footer from '../Components/footer.jsx'; // Import Footer component
import { MapContainer, TileLayer, Circle, Tooltip } from 'react-leaflet'; // Import React-Leaflet components

// Define the DateTimeDisplay component
function DateTimeDisplay() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString()); //initialise state for current time

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000); // Update time every second

    return () => clearInterval(interval);
  }, []);

  //displays current time
  return (
    <div className="date-time-display"> 
      {currentTime} 
    </div>
  );
}


export default function TemperatureMapPage() {
  const [temperatureData, setTemperatureData] = useState([]); //initialise state for temperature data
  const [errorMessage, setErrorMessage] = useState(null); //initialise state for error messages

  // Fetch air temperature data from the API
  const fetchTemperatureData = async () => {
    try {
      const response = await fetch('https://api.data.gov.sg/v1/environment/air-temperature'); //fetch data from API
      const data = await response.json(); //parse json response

      // Check the data structure and log it to show api works successfully
      console.log("Fetched data:", data);

      if (data.items && data.items.length > 0) { //checks if data items are available
        const stations = data.metadata.stations; //get station metadata
        const readings = data.items[0].readings; //get temperature readings

        // Map station names, coordinates, and temperature values
        const mappedData = readings.map(reading => {
          const station = stations.find(s => s.id === reading.station_id); //find station by id
          return {
            name: station.name,
            latitude: station.location.latitude,
            longitude: station.location.longitude,
            value: reading.value || 0, // Handle null values
          };
        });

        if (mappedData.length === 0) { //if mapped data is empty, show error meessage
          setErrorMessage('No temperature data available for display.');
        } else {
          setTemperatureData(mappedData); //set temperature data
        }
      } else {
        setErrorMessage('No temperature data available.'); //if no data items avail, show error message
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
    const interval = setInterval(fetchTemperatureData, 300000); //Refresh data every 5minutes
    return () => clearInterval(interval);  //when component mounts, setInterval(fetchTemperatureData,300000) has an interval timer that calls the fetchTemperatureData every 5mins
    //this line helps to clear the interval timer when the component unmounts, which ensures the interval doesnt continue to run after it the component has been removed from the DOM
    //-> prevent memory leaks, unwanted background tasks from running after the component is no longer in use.
  }, []);


  // Remove the isMounted state and useEffect
  return (
    <div className="page-container">
      <div className="map-container">
        <DateTimeDisplay /> {/* Render DateTimeDisplay component immediately */}
        {errorMessage ? ( //if have error message, display it, else continue 
          <p>{errorMessage}</p>
        ) : (
          <MapContainer center={[1.354372, 103.833816]} zoom={12} className="map"> {/* initialise map container */}
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' //give attribution
            />
            {temperatureData.map((station, index) => ( //map through the temp data 
              <Circle
                key={index} //sets a unique key6 for each circle
                center={[station.latitude, station.longitude]} //set the centre for circle
                radius={1500} //sets circle radius
                color="blue" //sets circle color
                fillColor="blue"
                fillOpacity={0.4} z
              >
                <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
                  <span>{station.name}: {station.value}°C</span> {/* display location name and temperature*/}
                </Tooltip>
              </Circle>
            ))}
          </MapContainer>
        )}
        <Footer /> {/* footer*/}
      </div>
    </div>
  );
}