import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import { v4 } from "uuid";
import { render } from "react-dom";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";

// add an id to the map and the popup. if the (conditions) matches then the popup shows up.
const TOKEN =
  "pk.eyJ1IjoiY2hsb2VjaGlhIiwiYSI6ImNsYnN3cGkwbjBhMDIzcm1waGx4OXlkdTcifQ.ZICh0q_fzJsvi3G1teTsKA"; // Set your mapbox token here

export default function App() {
  const [locations, setLocations] = useState([]);
  const [popupInfo, setPopupInfo] = useState(null);

  useEffect(() => {
    fetch(" http://localhost:8000/locations")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLocations(data);
      });
  }, []);

  function Button() {
    return <button>Button</button>;
  }

  // create a separate json data with the longitude and latitude of eac
  return (
    <>
      <div>
        {locations.map((location) => (
          <div key={v4()}>
            <p>Written by {location.Title}</p>
          </div>
        ))}
      </div>
      <Button />
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
    </>
  );
}
