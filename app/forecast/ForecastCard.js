import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Lottie to prevent server-side rendering (SSR) issues in Next.js
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// Mapping weather codes to corresponding animation files
const weatherAnimations = {
  TL: '/images/animations/Animation_thunderstorm_darkmode.json', // Thundery Showers
  SH: '/images/animations/Animation_heavyrain.json', // Heavy Rain
  CL: '/images/animations/Animation_partly_cloudy.json', // Cloudy (default)
  SU: '/images/animations/Animation_fair_darkmode.json', // Fair
};

// ForecastCard component to display weather forecast details
const ForecastCard = ({ day }) => {
  // Destructure forecast details from the day object
  const { forecast, temperature, relativeHumidity, wind } = day;

  // Determine the animation path based on the forecast code; default to Cloudy animation
  const animationPath = weatherAnimations[forecast.code] || weatherAnimations.CL;

  // State to hold the loaded animation data
  const [animationData, setAnimationData] = useState(null);

  // State to handle errors during animation loading
  const [error, setError] = useState(null);

  // useEffect to fetch animation JSON when animationPath changes
  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch(animationPath); // Fetch animation JSON file
        
        if (!response.ok) {
          throw new Error(`Failed to load animation: ${response.statusText}`); // Handle HTTP errors
        }

        const json = await response.json();
        setAnimationData(json); // Set animation data on successful fetch
        setError(null); // Reset error state
      } catch (error) {
        setError('Failed to load animation'); // Display user-friendly error message
        console.error('Error loading animation:', error);
      }
    };

    loadAnimation(); // Trigger fetch function
  }, [animationPath]); // Dependency array ensures effect runs when animationPath changes

  return (
    <div className="card">
      <h2>{day.day}</h2>

      {/* Display error message if animation fails to load */}
      {error ? (
        <p>{error}</p>
      ) : animationData ? (
        // Render Lottie animation if data is successfully loaded
        <Lottie animationData={animationData} className="weather-animation" loop={true} />
      ) : (
        <p>Loading animation...</p> // Show loading text while fetching animation
      )}

      {/* Display weather forecast details */}
      <p><strong>Forecast:</strong> {forecast.summary}</p>
      <p><strong>Temperature:</strong> {temperature.low}°C - {temperature.high}°C</p>
      <p><strong>Humidity:</strong> {relativeHumidity.low}% - {relativeHumidity.high}%</p>
      <p><strong>Wind:</strong> {wind.speed.low} - {wind.speed.high} km/h, {wind.direction}</p>
    </div>
  );
};

export default ForecastCard;
