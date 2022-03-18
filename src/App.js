import "./App.css";
import { useState } from "react";
import Country from "./components/Country";
import Counter from "./components/Counter";
import Pokemon from "./components/Pokemon";

function App() {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsShowing(!isShowing)}>
        Mostrar / ocultar
      </button>
      {/* <Counter /> */}
      {isShowing && <Country />}
      <Pokemon />
    </div>
  );
}

export default App;
