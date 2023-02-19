// SideMenu.js
import React, { Component } from "react";
import { Prompt } from "./prompt.js";

function SideMenu({ title, description, suggestions }) {
  return (
    <div className="ml-4 flex flex-col w-1/4">
      <h1 className="font-lg font-thick mb-5">{title}</h1>
      <p className="underline md:underline-offset-400">
        Google Panoramic Street View
      </p>

      <h2 className="mb-5">{description}</h2>
      <Prompt className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" />
      <h3>{suggestions}</h3>
    </div>
  );
}

export default SideMenu;
