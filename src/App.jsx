import React from "react";
import Map from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

const App = () => {
  return (
    <div>
      <Map
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="https://tiles.openfreemap.org/styles/liberty"
      />
      <p className="text-4xl font-bold text-green-600 absolute top-0 dev-b-blue">TelegramWebApp Init object: </p>
    </div>
  );
};

export default App;
