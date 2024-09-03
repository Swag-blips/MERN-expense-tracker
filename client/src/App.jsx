import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [description, setDescription] = useState("");

  const addNewTransaction = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_API_ROUTE}/transaction`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, dateTime, description }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <h1>
        $400<span>.00</span>
      </h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="+200 nwe samsung tv"
          />
          <input
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            type="datetime-local"
          />
        </div>
        <div className="description">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={"description"}
          />
        </div>
        <button type="submit">Add New transaction</button>

        <div className="transactions">
          <div className="transaction">
            <div className="left">
              <div className="name">New Samsung TV</div>
              <div className="description">it was time for new tv</div>
            </div>
            <div className="right">
              <div className="price red">$500</div>
              <div className="datetime">2022-12-18 15.45</div>
            </div>
          </div>
          <div className="transaction">
            <div className="left">
              <div className="name">Gig job new website</div>
              <div className="description">it was time for new tv</div>
            </div>
            <div className="right">
              <div className="price green">+$400</div>
              <div className="datetime">2022-12-18 15.45</div>
            </div>
          </div>
          <div className="transaction">
            <div className="left">
              <div className="name">Iphone</div>
              <div className="description">it was time for new tv</div>
            </div>
            <div className="right">
              <div className="price red">-$900</div>
              <div className="datetime">2022-12-18 15.45</div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}

export default App;
