import React, { useMemo, useState } from "react";
import CountersControl from "./components/CountersControl/CountersControl";
import CountersList from "./components/CountersList/CountersList";

const App = () => {
  const [counters, setCounters] = useState([]);

  const [countersInfo, setCountersInfo] = useState({
    countersAmount: 0,
    totalScore: 0,
  });

  useMemo(() => {
    const countersInfoClone = {
      countersAmount: counters.length,
      totalScore: 0,
    };
    countersInfoClone.totalScore = counters.reduce((acc, currCounter) => {
      return acc + currCounter.score;
    }, 0);
    setCountersInfo(countersInfoClone);
  }, [counters]);

  return (
    <>
      <div className="App">
        <CountersControl
          countersInfo={countersInfo}
          counters={counters}
          setCounters={setCounters}
        />
        <CountersList setCounters={setCounters} counters={counters} />
      </div>
    </>
  );
};

export default App;
