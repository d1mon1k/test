import React from "react";
import BtnsRow from "../BtnsRow/BtnsRow";
import MyButton from "../MyButton/MyButton";
import CounterInfo from "../CounterInfo/CounterInfo";
import cl from "./Counter.module.css";

const Counter = ({
  counters,
  counterIndex,
  increaseOnClick,
  decreaseOnClick,
  resetOnClick,
  deleteOnClick,
}) => {
  const currentCounter = counters[counterIndex];

  return (
    <li className={cl.counter}>
      <MyButton
        children={"Delete"}
        styleClass={"btnCenterSt"}
        onClick={() => {
          deleteOnClick(currentCounter);
        }}
      />
      <CounterInfo currentCounter={currentCounter} />
      <BtnsRow
        increaseOnClick={() => {
          increaseOnClick(currentCounter, counterIndex);
        }}
        decreaseOnClick={() => {
          decreaseOnClick(currentCounter, counterIndex);
        }}
        resetOnClick={() => {
          resetOnClick(currentCounter, counterIndex);
        }}
      />
    </li>
  );
};

export default Counter;
