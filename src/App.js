import * as React from "react";
import { render } from "react-dom";
import Map, { Marker, Popup } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiY2hsb2VjaGlhIiwiYSI6ImNsYnN3cGkwbjBhMDIzcm1waGx4OXlkdTcifQ.ZICh0q_fzJsvi3G1teTsKA"; // Set your mapbox token here

export default function Root() {
  const { showPopup, setShowPopup } = React.useState(true);

  return (
    <Map
      initialViewState={{
        latitude: 37.8,
        longitude: -122.4,
        zoom: 14,
      }}
      style={{ width: 800, height: 600 }}
      mapStyle="mapbox://styles/mapbox/navigation-day-v1"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      {showPopup && (
        <Popup
          longitude={-122.4}
          latitude={37.8}
          anchor="bottom"
          onClose={() => setShowPopup(false)}
        >
          You are here
        </Popup>
      )}
      <Marker longitude={-122.4} latitude={37.8} color="red" />
    </Map>
  );
}

render(<Root />, document.body.appendChild(document.createElement("div")));
