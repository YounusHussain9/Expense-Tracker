import React, { useContext } from "react";
import { globalContext } from "../../ContextApi/Globalstate";
import "./Balance.component.css";

const Balance = () => {
  const { transaction } = useContext(globalContext);
  const amount = transaction.map((data) => data.amount);
  const total = amount.reduce((acc, curr) => (acc += curr), 0).toFixed(2);

  return (
    <>
      <h4>YOUR BALANCE</h4>
      <h1>${total}</h1>
    </>
  );
};

export default Balance;
