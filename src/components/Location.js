import React, { useState, useEffect } from "react";

const Location = () => {
  const [locationObject, updateLocationObject] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      updateLocationObject(position);
      console.log(position);
    });
  }, []);

  return (
    <section className="card">
      <span>Location</span>
    </section>
  );
};

export default Location;
