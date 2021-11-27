import React from "react";
import MyButton from "../MyButton/MyButton";
import TotalInfo from "../TotalInfo/TotalInfo";
import cl from "./CountersControl.module.css";

const increaseEvenCounters = (counters) => {
  const cloneCounters = [...counters].map((counter) => {
    if (counter.isEven) {
      counter.score++;
      counter.isEven = !counter.isEven;
    }
    return counter;
  });
  return cloneCounters;
};

const CountersControl = ({ countersInfo, counters, setCounters }) => {
  const addCounterOnClick = () => {
    const increasedCountersArray = increaseEvenCounters(counters);
    const newCounter = { id: Date.now(), score: 0, isEven: true };
    setCounters([ ...increasedCountersArray, newCounter]);
  };

  const resetOnClick = () => {
    setCounters([]);
  };

  return (
    <section className={cl.countersControl}>
      <TotalInfo countersInfo={countersInfo} />
      <div className={cl.btnsPrimaryRow}>
        <MyButton
          children={"Add counter"}
          onClick={addCounterOnClick}
          styleClass={"btnPrimary"}
          style={{ margin: "0 25px 0 0" }}
        />
        <MyButton
          children={"Reset"}
          onClick={resetOnClick}
          styleClass={"btnPrimary"}
        />
      </div>
    </section>
  );
};

export default CountersControl;
