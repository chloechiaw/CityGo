import * as React from "react";
import { Prompt } from "./prompt.js";
import { useState, useEffect, useMemo } from "react";
import { v4 } from "uuid";
import MapView from "./MapView";
import SideMenu from "./SideMenu";
import StreetView from "./StreetView";
import { LoadScript } from "@react-google-maps/api";



// add an id to the map and the popup. if the (conditions) matches then the popup shows up.

export default function App() {
  const [locations, setLocations] = useState([]);
  const [displaySideMenu, setDisplaySideMenu] = useState({
    Title: "No area selected",
    description: "",
    suggestions: "",
    latitude: 0,
    longitude: 0,
  });
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const lib = ["places"];
  const key = "AIzaSyAZgZEKZ6djLHvWI9g5qkQGdDbInfSJ0nE";
  const [modelOutput, setModelOutput] = useState("");

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
        console.log(locations);
        setLocations(locations.locations);
      });
  }, []);

  function getWalkscoreData(location) {
    fetch(
      `"https://stmhall.ca/walkscore.php?addr=${
        location.Title + location.Address
      }"`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
        },
        (error) => {
          setError(error);
        }
      );
  }

  return (
    <div>
      <LoadScript googleMapsApiKey={key} libraries={lib}>
        <StreetView lat={37.7857} lng={122.4011}/>
      </LoadScript>
      {/* <MapView setDisplaySideMenu={setDisplaySideMenu} locations={locations}/>
      <SideMenu
        title={displaySideMenu.Title}
        description={displaySideMenu.description}
        suggestions={displaySideMenu.suggestions}
        latitude={displaySideMenu.latitude}
        longitude={displaySideMenu.longitude}
      /> */}
    </div>
  );
}

      


       