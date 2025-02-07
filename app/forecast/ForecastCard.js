import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const weatherAnimations = {
  TL: '/images/animations/Animation_thunderstorm_darkmode.json', // Thundery Showers
  SH: '/images/animations/Animation_heavyrain.json', // Heavy Rain
  CL: '/images/animations/Animation_partly_cloudy.json', // Cloudy
  SU: '/images/animations/Animation_fair_darkmode.json', // Fair
};

const ForecastCard = ({ day }) => {
  const { forecast, temperature, relativeHumidity, wind } = day;
  const animationPath = weatherAnimations[forecast.code] || weatherAnimations.CL; // Default to Cloudy
  
  const [animationData, setAnimationData] = useState(null);
  const [error, setError] = useState(null); // To handle errors during fetching

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch(animationPath);
        
        if (!response.ok) {
          throw new Error(`Failed to load animation: ${response.statusText}`);
        }

        const json = await response.json();
        setAnimationData(json);
        setError(null); // Reset error on successful fetch
      } catch (error) {
        setError('Failed to load animation'); // Set a user-friendly error message
        console.error('Error loading animation:', error);
      }
    };

    loadAnimation();
  }, [animationPath]);

  return (
    <div className="card">
      <h2>{day.day}</h2>
      {error ? (
        <p>{error}</p> // Display error if any
      ) : animationData ? (
        <Lottie animationData={animationData} className="weather-animation" loop={true} />
      ) : (
        <p>Loading animation...</p>
      )}
      <p><strong>Forecast:</strong> {forecast.summary}</p>
      <p><strong>Temperature:</strong> {temperature.low}°C - {temperature.high}°C</p>
      <p><strong>Humidity:</strong> {relativeHumidity.low}% - {relativeHumidity.high}%</p>
      <p><strong>Wind:</strong> {wind.speed.low} - {wind.speed.high} km/h, {wind.direction}</p>
    </div>
  );
};

export default ForecastCard;