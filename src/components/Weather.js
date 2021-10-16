import axios from "axios";
import React, { useState } from "react";

const Weather = () => {
  const [cityInput, changeCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState({ current: { temp_f: 0 } });

  const handleCityChange = (e) => changeCity(e);

  const getWeatherForCity = () => {
    let apiKey = "";
    console.log("hit");

    axios
      .get("/api/weather/key")
      .then((res) => {
        apiKey = res.data;
      })
      .catch((err) => console.log(err));

    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput}`
      )
      .then((res) => {
        console.log(res);
        // setWeatherInfo(res.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="card">
      <form>
        <section>
          <h4>Check the weather</h4>
          <input
            type="text"
            onChange={(e) => handleCityChange(e.target.value)}
            placeholder="city"
            value={cityInput}
          />
          <button onClick={getWeatherForCity()}>Submit</button>
        </section>
      </form>
      <section>
        <div>
          <span>Temp: {weatherInfo.current.temp_f} &#176;F</span>
        </div>
      </section>
    </div>
  );
};

export default Weather;
