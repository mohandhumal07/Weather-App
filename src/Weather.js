import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '752412cd45d34f32a37112132241707'; 
     
  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      );
      setWeatherData(response.data);
    } catch (error) {
      alert("Error Fetching weather data", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city.trim() !== '') {
      fetchWeatherData();
	 setCity('');
    }
	else
	alert("Enter city name");
	
  };

  return (
<>
<center>
    
      <form onSubmit={handleSubmit}>
		<h1> Weather App </h1>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
			<br/>
        <input type="submit" value = "Get Weather"/>
       {weatherData && (
        <div>
          <h2>Weather in {weatherData.location.name}</h2>
          <p>Latitude: {weatherData.location.lat}</p>
          <p>Longitude: {weatherData.location.lon}</p>
          <p>Temperature: {weatherData.current.temp_c} °C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
        </div>
      )}
     </form>
	</center>
</>
  );
};

export default Weather;