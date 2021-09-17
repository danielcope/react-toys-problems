import axios from "axios";
import React, { useState, useEffect } from "react";

const Weather = () => {
  const [cityInput, changeCity] = useState("");
  const [weatherApiKey, setKey] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);

  const getWeatherForCity = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${cityInput}`
      )
      .then((res) => {
        setWeatherInfo(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios
      .get("/api/weather/key", { test: "city" })
      .then((res) => setKey(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="card">
      <form>
        <section>
          <section>
            <span>What city do you live in?</span>
          </section>
          <input
            type="text"
            onChange={(e) => changeCity(e.target.value)}
            placeholder="city"
            value={cityInput}
          />
        </section>
      </form>
      <button onClick={() => getWeatherForCity()}>Submit</button>
      <section>
        {!weatherInfo ? (
          <div></div>
        ) : (
          <div>
            <span>Temp: {weatherInfo.current.temp_f} &#176;F</span>
          </div>
        )}
      </section>
    </div>
  );
};

export default Weather;
