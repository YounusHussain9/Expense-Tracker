import React from "react";
import { createContext, useReducer, useContext } from "react";
import Reducer from "./Reducer";

// initial state
const initialState = {
  transaction: [
    {
      id: 1,
      text: "flower",
      amount: -20,
    },
    {
      id: 2,
      text: "Book",
      amount: 40,
    },
    {
      id: 3,
      text: "Car",
      amount: 120,
    },
  ],
};

// create Context
export const globalContext = createContext(initialState);

// create provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  // action
  function deleteTransaction(id) {
    dispatch({
      type: "Delete",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "Add",
      payload: transaction,
    });
  }

  return (
    <globalContext.Provider
      value={{
        transaction: state.transaction,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};
