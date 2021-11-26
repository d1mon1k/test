import React from "react";
import cl from "./CounterInfo.module.css";

const CounterInfo = ({ currentCounter }) => {
  const isEven = currentCounter.isEven ? (
    <>
      Введено <br /> чётное <br /> число
    </>
  ) : (
    <>
      Введено <br /> нечётное <br /> число
    </>
  );

  return (
    <>
      <div className={cl.score}>{currentCounter.score}</div>
      <div className={cl.parity}>{isEven}</div>
    </>
  );
};

export default CounterInfo;
