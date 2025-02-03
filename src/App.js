import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handlePrevCount() {
    // if (step !== 0) {
    //   setCount(step + count);
    // }
    if (step != 0) {
      setCount(count - step);
    } else {
      setCount(count - 1);
    }
  }

  function handleNextCount() {
    // if (step !== 0) {
    //   setCount(step + count);
    // }
    if (step != 0) {
      setCount(count + step);
    } else {
      setCount(count + 1);
    }
  }

  console.log(date.day);
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => setStep((s) => s - 1)}>-</button>
      <span>Step: {step}</span>
      <button onClick={() => setStep((s) => s + 1)}>+</button>
      <br />
      <button onClick={handlePrevCount}>-</button>
      <span>Count: {count}</span>
      <button onClick={handleNextCount}>+</button>
      <br />
      {count === 0 ? (
        <span>Today is {date.toDateString()}</span>
      ) : count > 0 ? (
        <span>
          {count} days from today is {date.toDateString()}
        </span>
      ) : (
        <span>
          {count} days ago was {date.toDateString()}
        </span>
      )}
    </div>
  );
}
