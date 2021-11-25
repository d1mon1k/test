import React from "react";

const Counter = () => {
  return (
    <div className="counter">
      <button className="btn btn_center">Delete</button>
      <div className="counter__score">0</div>
      <div className="counter__parity">Введено чётное число</div>
      <div className="btns-row">
        <button className="btns-row__decrease btn">-</button>
        <button className="btns-row__reset btn">Reset</button>
        <button className="btns-row__increase btn">+</button>
      </div>
    </div>
  );
};

export default Counter;
