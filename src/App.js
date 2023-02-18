import * as React from "react";
import { Prompt } from "./prompt.js";
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
import MapView from "./MapView";
import SideMenu from "./SideMenu";

// add an id to the map and the popup. if the (conditions) matches then the popup shows up.

export default function App() {
  const [locations, setLocations] = useState([]);
  const [popupInfo, setPopupInfo] = useState(null);

  const [modelOutput, setModelOutput] = useState("");

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
    <div>
      <p>{modelOutput}</p>
      {locations.map((location) => (
        <div key={v4()}>
          <p>Written by {location.Title}</p>
          <Prompt place={location} setModelOutput={setModelOutput} />
        </div>
      ))}
      <Button />
      <MapView />
      <SideMenu />
    </div>
  );
}
