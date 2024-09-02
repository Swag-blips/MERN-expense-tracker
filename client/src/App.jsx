import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>
        $400<span>.00</span>
      </h1>
      <form>
        <div>
          <input type="text" placeholder="+200 nwe samsung tv" />
          <input type="datetime-local" />
        </div>
        <div className="description">
          <input type="text" placeholder={"description"} />
        </div>
      </form>
    </main>
  );
}

export default App;
