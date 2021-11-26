import React, { useState } from "react";
import Counter from "./components/Counter";
import CountersControl from "./components/CountersControl";

const App = () => {
  const [counters, setCounters] = useState([
    { id: 1, score: 0, isEvent: true },
    { id: 2, score: 0, isEvent: true },
    { id: 3, score: 0, isEvent: true },
    { id: 4, score: 0, isEvent: true },
  ]);

  const countersList = counters.map((counter, index) => {
    return (
      <Counter
        key={counter.id}
        counter={counter}
        counterIndex={index}
        counters={counters}
        setCounters={setCounters}
      />
    );
  });

  return (
    <>
      <div className="App">
        <CountersControl setCounters={setCounters} counters={counters} />
        <ul className="counters-grid">{countersList}</ul>
      </div>
    </>
  );
};

export default App;
