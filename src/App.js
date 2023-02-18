import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import { v4 } from "uuid";
import MapView from "./MapView";
import SideMenu from "./SideMenu";

// add an id to the map and the popup. if the (conditions) matches then the popup shows up.

export default function App() {
  const [locations, setLocations] = useState([]);
  const [popupInfo, setPopupInfo] = useState(null);

  useEffect(() => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((locations) => {
        setLocations(locations.locations);
      });
  }, []);

  function Button() {
    return <button>Button</button>;
  }

  // create a separate json data with the longitude and latitude of eac
  return (
    <div>
      <Button />‍
      {locations.map((place) => (
          <div key={v4()}>
            <p>{place.Address}</p>
          </div>
        ))}
      <MapView />
      <SideMenu />
    </div>
  );
}
