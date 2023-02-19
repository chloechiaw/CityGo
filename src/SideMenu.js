// SideMenu.js
import React, { Component } from "react";
import { LoadScript } from "@react-google-maps/api";
import StreetView from "./StreetView";
import { Prompt } from "./prompt.js";

export function SideMenu({
  title,
  description,
  suggestions,
  latitude,
  longitude,
  walkScore,
  setModelOutput,
}) {
  const lib = ["places"];
  const key = "AIzaSyAZgZEKZ6djLHvWI9g5qkQGdDbInfSJ0nE";
  console.log(latitude, longitude);
  return (
    <div className="mt-20 flex flex-col ">
      <h2 className="mb-2 font-bold"> Next ... analyze the location </h2>
      <p className="font-bold shadow-md rounded-lg bg-indigo-600 p-2 text-white ">
        Location
      </p>
      <h1 className="font-lg font-thick mb-5">{title}</h1>
      <p className="font-bold shadow-md rounded-lg mt-4 flex items-center text-gray-500rounded-lg bg-indigo-600 p-2 text-white">
        {" "}
        Walk Score
      </p>
      <h1 className="font-lg font-thick mb-5">{walkScore}</h1>
      <p className="font-bold shadow-md rounded-lg mt-4 flex items-center text-gray-500rounded-lg bg-indigo-600 p-2 text-white">
        {" "}
        Street View
      </p>

      <br></br>

      <LoadScript googleMapsApiKey={key} libraries={lib}>
        <StreetView latitude={latitude} longitude={longitude} />
      </LoadScript>

      <br></br>
      <Prompt title={title} setModelOutput={setModelOutput} />
      <br></br>

      <p>Suggestions</p>
      <h3>{suggestions}</h3>
    </div>
  );
}
