import React from "react";
import Counter from "../Counter/Counter";
import cl from "./CountersList.module.css";

const decreaseOddCounters = (counters) => {
  const countersArr = counters.map((counter) => {
    if (!counter.isEven) {
      counter.score--;
      counter.isEven = !counter.isEven;
    }
    return counter;
  });
  return countersArr;
};

const CountersList = ({ counters, setCounters }) => {
  const decreaseOnClick = (currentCounter, counterIndex) => {
    const countersArrClone = counters.slice(0);
    const counterClone = currentCounter;
    if (counterClone.score > 0) {
      counterClone.score--;
      counterClone.isEven = !counterClone.isEven;
    }
    countersArrClone[counterIndex] = counterClone;
    setCounters(countersArrClone);
  };

  const increaseOnClick = (currentCounter, counterIndex) => {
    const countersArrClone = counters.slice(0);
    const counterClone = currentCounter;
    counterClone.score++;
    counterClone.isEven = !counterClone.isEven;
    countersArrClone[counterIndex] = counterClone;
    setCounters(countersArrClone);
  };

  const resetOnClick = (currentCounter, counterIndex) => {
    const countersArrClone = counters.slice(0);
    const counterClone = currentCounter;
    counterClone.score = 0;
    counterClone.isEven = true;
    countersArrClone[counterIndex] = counterClone;
    setCounters(countersArrClone);
  };

  const deleteOnClick = (currentCounter) => {
    const countersArrClone = counters.slice(0);
    let newCountersArr = countersArrClone.filter((counter) => {
      return counter.id !== currentCounter.id;
    });
    newCountersArr = decreaseOddCounters(newCountersArr);
    setCounters(newCountersArr);
  };

  const countersList = counters.map((counter, index) => {
    return (
      <Counter
        key={counter.id}
        increaseOnClick={increaseOnClick}
        decreaseOnClick={decreaseOnClick}
        resetOnClick={resetOnClick}
        deleteOnClick={deleteOnClick}
        counterIndex={index}
        counters={counters}
      />
    );
  });

  return <ul className={cl.countersGrid}>{countersList}</ul>;
};

export default CountersList;
