import React from "react";

const CountersControl = (props) => {
  const onClickHandler = () => {
    const newCounter = { id: Date.now(), score: 0, isEven: true };
    props.setCounters([newCounter, ...props.counters]);
  };

  const onClickHandler2 = () => {
    props.setCounters([]);
  };

  return (
    <section className="counters-control">
      <div className="info">
        <div>
          Количество счётчиков на экране: <span>10</span>
        </div>
        <div>
          Сумма значений всех счётчиков: <span>3</span>
        </div>
      </div>
      <div className="btns-primary">
        <button
          onClick={onClickHandler}
          className="btn btn-primary btn-primary_left"
        >
          Add counter
        </button>
        <button onClick={onClickHandler2} className="btn btn-primary">
          Reset
        </button>
      </div>
    </section>
  );
};

export default CountersControl;
