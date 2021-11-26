import React from "react";
import MyButton from "../MyButton/MyButton";
import cl from './BtnsRow.module.css'

const BtnsRow = ({decreaseOnClick, increaseOnClick, resetOnClick}) => {
  return (
    <div className={cl.btnsRow}>
      <MyButton
        children={"-"}
        styleClass={"btnDecreaseSt"}
        onClick={decreaseOnClick}
      />
      <MyButton 
        children={"Reset"} 
        onClick={resetOnClick}         
      />
      <MyButton
        children={"+"}
        styleClass={"btnIncreaseSt"}
        onClick={increaseOnClick}
      />
    </div>
  );
};

export default BtnsRow;
