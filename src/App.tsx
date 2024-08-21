import React, { useReducer } from "react";
import { RandomName } from "./RandomName";
import { RandomClass } from "./RandomClass";
import { TroublingTales } from "./TroublingTales";
import { BrokenBodies } from "./BrokenBodies";
import { BadHabits } from "./BadHabits";
import { TerribleTraits } from "./TerribleTraits";

function App() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  return (
    <div className="max-w-3xl m-auto">
      <h1>Abyss of Hallucinations</h1>
      <h2 className="mb-0">Character Generator </h2>
      <button
        style={{ position: "relative", top: -70, right: 300 }}
        onClick={forceUpdate}
      >
        Reroll
      </button>

      <div className="text-left">
        <p>
          <b>Name:</b> <RandomName />
        </p>
        <RandomClass />
      </div>

      <hr className="mt-10" />
      <h2>Random Tables</h2>

      <div className="text-left">
        <p>
          <b>Terrible Traits:</b> <TerribleTraits />
        </p>
        <p>
          <b>Broken Body:</b> <BrokenBodies />
        </p>
        <p>
          <b>Bad Habit:</b> <BadHabits />
        </p>
        <p>
          <b>Troubling Tale:</b> <TroublingTales />
        </p>
      </div>
    </div>
  );
}

export default App;
