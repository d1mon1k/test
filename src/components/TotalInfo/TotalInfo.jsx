import React from "react";
import cl from "./TotalInfo.module.css";

const TotalInfo = ({ countersInfo }) => {
  return (
    <div className={cl.info}>
      <div>Количество счётчиков на экране: {countersInfo.countersAmount}</div>
      <div>Сумма значений всех счётчиков: {countersInfo.totalScore}</div>
    </div>
  );
};

export default TotalInfo;
