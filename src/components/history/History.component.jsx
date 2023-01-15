import React, { useContext } from "react";
import "./History.component.css";
import { globalContext } from "../../ContextApi/Globalstate";

const History = () => {
  const context = useContext(globalContext);
  const { transaction, deleteTransaction } = context;

  console.log(context);
  return (
    <div className="history-container">
      <h3 className="title">History</h3>
      <hr />

      <ul className="ul">
        {transaction.map((data) => {
          const sign = data.amount < 0 ? "-" : "+";
          return (
            <li
              className={`list ${data.amount < 0 ? "minus" : "plus"}`}
              key={data.id}
            >
              {data.text}
              <span>
                {sign}${Math.abs(data.amount)}
              </span>
              <h2
                className="delt"
                onClick={() => {
                  deleteTransaction(data.id);
                }}
              >
                x
              </h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
