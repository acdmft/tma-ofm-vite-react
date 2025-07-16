import React from "react";
import Map from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import WebApp from "@twa-dev/sdk";

const App = () => {
  //  const tg = window.Telegram.WebApp;

  // User data
  // const user = tg.initDataUnsafe?.user;
  const user = WebApp.initDataUnsafe.user;
  if (user) {
    console.log("User ID:", user.id);
    console.log("Username:", user.username);
    console.log("First Name:", user.first_name);
    console.log("Last Name:", user.last_name);
    console.log("Language Code:", user.language_code);
  } else {
    console.log("No user data available.");
  }

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
      <p className="text-4xl font-bold text-green-600 absolute top-0 dev-b-blue">
        TelegramWebApp Init object:
        {/* { telegramEnvironment ? (<span>{{data.user}}</span>) : (<></>)} */}
      </p>
    </div>
  );
};

export default App;
