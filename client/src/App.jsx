import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [description, setDescription] = useState("");
  const [transactions, setTransactions] = useState([]);
  const url = `${import.meta.env.VITE_API_ROUTE}`;

  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions = async () => {
    try {
      let response = await fetch(`${url}/api/transactions`);
      let data = await response.json();
      setTransactions(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const addNewTransaction = async (e) => {
    e.preventDefault();

    const price = name.split(" ")[0];

    try {
      const response = await fetch(`${url}/transaction`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price,
          name: name.substring(price.length + 1),
          dateTime,
          description,
        }),
      });

      const data = await response.json();
      console.log(data);
      setName("");
      setDateTime("");
      setDescription("");
    } catch (error) {
      console.error(error);
    }
  };

  let balance = 0;

  for (const transaction of transactions) {
    balance = balance + transaction.price;
  }
  balance = balance.toFixed(2);
  const fraction = balance.split(".")[1];
  balance = balance.split(".")[0];
  return (
    <main>
      <h1>
        ${balance}
        <span>{fraction}</span>
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
          {transactions?.map((transaction) => (
            <div key={transaction._id} className="transaction">
              <div className="left">
                <div className="name">{transaction.name}</div>
                <div className="description">{transaction.description}</div>
              </div>
              <div className="right">
                <div
                  className={`price ${transaction.price < 0 ? "red" : "green"}`}
                >
                  {transaction.price}
                </div>
                <div className="datetime">2022-12-18 15.45</div>
              </div>
            </div>
          ))}
        </div>
      </form>
    </main>
  );
}

export default App;
