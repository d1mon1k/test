import React, { useState } from "react";
import Counter from "./components/Counter";
import CountersControl from "./components/CountersControl";

const App = () => {
  const [counters, setCounters] = useState([{ score: 0, isEvent: true }]);

  const countersList = counters.map((counter) => {
    return <Counter />;
  });

  return (
    <>
      <div className="App">
        <CountersControl setCounters={setCounters} counters={counters} />
        <main className="counters-grid">{countersList}</main>
      </div>
    </>
  );
};

export default App;
