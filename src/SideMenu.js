// SideMenu.js
import React, { Component } from "react";

const sideMenu = {
  position: "fixed",
  width: "100%",
  height: 700,
  overflow: "hidden",
  pointerEvents: "none",
  zIndex: 25,
};

const sideMenuOverlay = {
  position: "absolute",
  right: 10,
  display: "block",
  height: "100%",
  width: "30%",
  backgroundColor: "#abdbe3",
  padding: 10,
};

function SideMenu({ title, description, suggestions }) {
  return (
    <div className="ml-4 flex flex-col w-1/4">
      <h1 className="font-lg font-thick mb-5">{title}</h1>
      <p className="underline md:underline-offset-400">
        Google Panoramic Street View
      </p>

      <h2 className="mb-5">{description}</h2>
      <button className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Suggest how to make this a more walkable place.
      </button>
      <h3>{suggestions}</h3>
    </div>
  );
}

export default SideMenu;
