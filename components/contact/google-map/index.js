import React, { useState } from "react";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";

const apikey =
  "pk.eyJ1Ijoibmljb3RhY2NhcmkiLCJhIjoiY2s4eGpmNmhuMHc1YjNmc2ZvZnIzM3hoZiJ9.Ygh01QDRFqKGyfa0OAVKvg";

const marker = {
  lat: 41.4939366,
  long: 2.3633999,
};

const navStyle = {
  position: "absolute",
  top: 36,
  left: 0,
  padding: "10px",
};

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 41.4939366,
    longitude: 2.3633999,
    zoom: 16,
    bearing: 0,
    pitch: 0,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken={apikey}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      <Marker
        latitude={marker.lat}
        longitude={marker.long}
        offsetLeft={-20}
        offsetTop={-10}
        type="symbol"
      >
        <img
          src="https://img.icons8.com/color/40/000000/marker.png"
          alt="April Road Studios"
        />
      </Marker>

      <div className="nav" style={navStyle}>
        <NavigationControl />
      </div>
    </ReactMapGL>
  );
};

export default Map;
