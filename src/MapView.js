// MapView.js
import { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";

function MapView() {
  const TOKEN =
    "pk.eyJ1IjoiY2hsb2VjaGlhIiwiYSI6ImNsYnN3cGkwbjBhMDIzcm1waGx4OXlkdTcifQ.ZICh0q_fzJsvi3G1teTsKA"; // Set your mapbox token here
  const [popupInfo, setPopupInfo] = useState(null);
  return (
    <Map
      initialViewState={{
        latitude: 37.8,
        longitude: -122.4,
        zoom: 12,
        bearing: 0,
        pitch: 0,
      }}
      style={{ width: 800, height: 600, zIndex: 0 }}
      mapStyle="mapbox://styles/mapbox/navigation-day-v1"
      mapboxAccessToken={TOKEN}
    >
      <Marker
        longitude={-122.3972337}
        latitude={37.7897442}
        anchor="bottom"
        onClick={(e) => {
          // If we let the click event propagates to the map, it will immediately close the popup
          // with `closeOnClick: true`
          e.originalEvent.stopPropagation();
          setPopupInfo("San Francisco");
        }}
      ></Marker>
      <Marker
        longitude={-122.4}
        latitude={37.7897442}
        anchor="bottom"
        onClick={(e) => {
          // If we let the click event propagates to the map, it will immediately close the popup
          // with `closeOnClick: true`
          e.originalEvent.stopPropagation();
          setPopupInfo("San Francisco");
        }}
      ></Marker>
      <Marker
        longitude={-122.3972337}
        latitude={37.8}
        anchor="bottom"
        onClick={(e) => {
          // If we let the click event propagates to the map, it will immediately close the popup
          // with `closeOnClick: true`
          e.originalEvent.stopPropagation();
          setPopupInfo("San Francisco");
        }}
      ></Marker>

      {popupInfo && (
        <Popup
          anchor="top"
          longitude={-122.4}
          latitude={37.8}
          onClose={() => setPopupInfo(null)}
        >
          <div>
            <p>Test</p>
          </div>
        </Popup>
      )}
      {/* divider  */}
      {popupInfo && (
        <Popup
          anchor="top"
          longitude={-122.3972337}
          latitude={37.7897442}
          onClose={() => setPopupInfo(null)}
        >
          <div>
            <p>Test</p>
          </div>
        </Popup>
      )}
      {popupInfo && (
        <Popup
          anchor="top"
          longitude={-122.4327556}
          latitude={37.7762528}
          onClose={() => setPopupInfo(null)}
        >
          <div>
            <p>Test</p>
          </div>
        </Popup>
      )}
    </Map>
  );
}

export default MapView;
