import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import generate from "./generate";

export function Prompt(props) {
  async function onClick() {
    const output = await generate(props.place);
    props.setModelOutput(output);
  }

  return (
    <div className="w-120 h-50 inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
      <button
        className="w-120 h-50 inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={onClick}
      >
        (Returns Text) Give concrete suggestions on how to make this a more
        walkable place.
      </button>
    </div>
  );
}
