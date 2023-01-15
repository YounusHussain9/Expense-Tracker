import React, { useContext } from "react";
import { globalContext } from "../../ContextApi/Globalstate";
import "./Calculated.css";

const Calculated = () => {
  const { transaction } = useContext(globalContext);
  const amount = transaction.map((data) => data.amount);
  console.log(amount);
  const income = amount
    .filter((amount) => amount > 0)
    .reduce((acc, curr) => (acc += curr), 0)
    .toFixed(2);
  const expense = amount
    .filter((amount) => amount < 0)
    .reduce((acc, curr) => (acc += curr), 0)
    .toFixed(2);
  return (
    <>
      <div className="containner">
        <div className="left">
          <h4>INCOME</h4>
          <h1>${income}</h1>
        </div>

        <div className="right">
          <h4>EXPENSE</h4>
          <h1>${expense}</h1>
        </div>
      </div>
    </>
  );
};

export default Calculated;
