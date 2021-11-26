import React from "react";

const Counter = (props) => {
  const decreaseOnClick = () => {
    const countersClone = props.counters.slice(0);
    const counterClone = countersClone[props.counterIndex];
    if (counterClone.score > 0) {
      counterClone.score--;
      counterClone.isEvent = !counterClone.isEvent;
    }
    countersClone[props.counterIndex] = counterClone;
    props.setCounters(countersClone);
  };

  const increaseOnClick = () => {
    const countersClone = props.counters.slice(0);
    const counterClone = countersClone[props.counterIndex];
    counterClone.score++;
    counterClone.isEvent = !counterClone.isEvent;
    countersClone[props.counterIndex] = counterClone;
    props.setCounters(countersClone);
  };

  const resetOnClick = () => {
    const countersClone = props.counters.slice(0);
    const counterClone = countersClone[props.counterIndex];
    counterClone.score = 0;
    counterClone.isEvent = true;
    countersClone[props.counterIndex] = counterClone;
    props.setCounters(countersClone);
  };

  const deleteOnClick = () => {
    let countersClone = props.counters.slice(0);
    countersClone = countersClone.filter((counter) => {
      return counter.id !== props.counter.id;
    });
    props.setCounters(countersClone);
  };

  return (
    <li className="counter">
      <button onClick={deleteOnClick} className="btn btn_center">
        Delete
      </button>
      <div className="counter__score">{props.counter.score}</div>
      <div className="counter__parity">
        {props.counter.isEvent
          ? "Введено чётное число"
          : "Введено нечётное число"}  
      </div>
      <div className="btns-row">
        <button onClick={decreaseOnClick} className="btns-row__decrease btn">
          -
        </button>
        <button onClick={resetOnClick} className="btns-row__reset btn">
          Reset
        </button>
        <button onClick={increaseOnClick} className="btns-row__increase btn">
          +
        </button>
      </div>
    </li>
  );
};

export default Counter;
