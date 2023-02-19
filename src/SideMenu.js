// SideMenu.js
import React, { Component } from "react";
import { LoadScript } from "@react-google-maps/api";
import StreetView from './StreetView'


function SideMenu({ title, description, suggestions }) {
  const lib = ["places"];
  const key = "AIzaSyAZgZEKZ6djLHvWI9g5qkQGdDbInfSJ0nE";
  return (
    <div className="ml-4 flex flex-col w-1/4">
      <h1 className="font-lg font-thick mb-5">{title}</h1>
      <p className="underline md:underline-offset-400">
        Google Panoramic Street View
      </p>
      <LoadScript googleMapsApiKey={key} libraries={lib}>
        <StreetView lat={37.7857} lng={122.4011}/>
      </LoadScript>
      <h2 className="mb-5">{description}</h2>
      <button className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Suggest how to make this a more walkable place.
      </button>
      <h3>{suggestions}</h3>
    </div>
  );
}

export default SideMenu;
