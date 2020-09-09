import React, { createContext, useContext, useReducer } from "react";

//prepara o Data Layer
export const StateContext = createContext();

//envolve aplicação (prepara estado inicial) e provê o Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//puxa informações do Data Layer
export const useStateValue = () => useContext(StateContext);
