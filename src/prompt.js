import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import generate from "./generate";

export function Prompt(props) {
  async function onClick() {
    const output = await generate(props.place);
    props.setModelOutput(output);
  }

  return (
    <div>
      <button onClick={onClick}>
        Suggest how to make this a more walkable place.
      </button>
    </div>
  );
}
