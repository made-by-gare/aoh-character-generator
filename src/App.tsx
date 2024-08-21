import React, { useReducer } from "react";
import { RandomName } from "./RandomName";

function App() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  return (
    <div className="App m-10">
      <header className="App-header">
        <h1>Abyss of Hallucinations</h1>
        <h2>Character Generator</h2>
        <button onClick={forceUpdate}>Roll New Character</button>
        <p>
          <b>Name:</b> <RandomName />
        </p>
      </header>
    </div>
  );
}

export default App;
