import * as React from "react";
import { Header } from "./header";
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
    latitude: 0, //37.7857
    longitude: 0, //122.4011
    walkScore: 0,
  });
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


  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-gray-800 h-16 flex items-center ">
        <Header />
      </div>
      <p>{modelOutput}</p>
      <div>
        <div className="mt-10 w-full grid grid-cols-2 gap-2 p-4">
          <div>
            <MapView
              className="w-300 h-64 mt-10 col-span-2"
              setDisplaySideMenu={setDisplaySideMenu}
              locations={locations}
            />
          </div>
          <div className="col-span-1">
            <SideMenu
              className="w-300 h-64 align"
              title={displaySideMenu.Title}
              description={displaySideMenu.description}
              suggestions={displaySideMenu.suggestions}
              latitude={displaySideMenu.latitude}
              longitude={displaySideMenu.longitude}
              walkScore={displaySideMenu.walkScore}
            ></SideMenu>
          </div>
        </div>
      </div>
    </div>
  );
}


      


       