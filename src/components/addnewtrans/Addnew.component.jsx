import React, { useState } from "react";
import { useContext } from "react";
import { globalContext } from "../../ContextApi/Globalstate";
import "./Addnew.component.css";

const Addnew = () => {
  const { addTransaction } = useContext(globalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    const Transactions = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };
    addTransaction(Transactions);
  };

  return (
    <div className="addnew-container">
      <h3 className="title">Add new transaction</h3>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text" className="label">
            Text
          </label>
          <input
            type="text"
            placeholder="Enter Text..."
            value={text}
            className="text-input"
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        {/* Amount */}

        <div className="form-control">
          <label htmlFor="amount" className="label">
            Amount <br />
            <h5>(negative-expense , positive-income)</h5>
          </label>
          <input
            type="text"
            placeholder="Enter amount..."
            value={amount}
            className="amount-input"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default Addnew;
