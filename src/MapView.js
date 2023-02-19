// MapView.js
import { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";

function MapView({ setDisplaySideMenu, locations }) {
  const TOKEN =
    "pk.eyJ1IjoiY2hsb2VjaGlhIiwiYSI6ImNsYnN3cGkwbjBhMDIzcm1waGx4OXlkdTcifQ.ZICh0q_fzJsvi3G1teTsKA"; // Set your mapbox token here
  const [showSideBar, setShowSideBar] = useState(null);
  const [popupInfo, setPopupInfo] = useState(null);

  function onClick(location) {
    setPopupInfo(location);
    setDisplaySideMenu({
      Title: location.Title,
      description: "Description",
      suggestions: "Suggestions",
      latitude: location.Latitude,
      longitude: location.Longitude
    });
  }

  return (
    <Map
      className="flex w-3/4"
      initialViewState={{
        latitude: 37.8,
        longitude: -122.4,
        zoom: 12,
        bearing: 0,
        pitch: 0,
      }}
      style={{ width: 800, height: 600, zIndex: 0 }}
      mapStyle="mapbox://styles/chloechia/cle7t9mqa000a01pgt1v4w61o"
      mapboxAccessToken={TOKEN}
    >
      {locations.map((location) => {
        return (
          <Marker
            key={location.Title + location.Address}
            longitude={location.Longitude}
            latitude={location.Latitude}
            anchor="bottom"
            onClick={(e) => {
              // If we let the click event propagates to the map, it will immediately close the popup
              // with `closeOnClick: true`
              e.originalEvent.stopPropagation();
              onClick(location);
            }}
          ></Marker>
        );
      })}
    </Map>
  );
}

export default MapView;
