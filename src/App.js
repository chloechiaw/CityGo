import * as React from "react";
import { Header } from "./Header";
import { Prompt } from "./prompt.js";
import { useState, useEffect, useMemo } from "react";
import { v4 } from "uuid";
import MapView from "./MapView";
import SideMenu from "./SideMenu";

// add an id to the map and the popup. if the (conditions) matches then the popup shows up.

export default function App() {
  const [locations, setLocations] = useState([]);
  const [displaySideMenu, setDisplaySideMenu] = useState({
    Title: "No area selected",
    description: "",
    suggestions: "",
  });
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);

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

  // numbers.forEach(number => console.log(number));

  //   const array1 = ['a', 'b', 'c'];

  // array1.forEach(element => console.log(element));
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
            ></SideMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
