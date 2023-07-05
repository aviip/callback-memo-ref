import { useRef, useState } from "react";

const RefHook = () => {
  const [randomInput, setRandomInput] = useState("");
  const [seconds, setSeconds] = useState(0);

  const renders = useRef(0);
  // const inputRef = useRef();

  const timerId = useRef();

  const handleChange = (e) => {
    setRandomInput(e.target.value);
    renders.current++;
  };

  // const focusInput = () => {
  //   inputRef.current.focus();
  // };

  const startTimer = () => {
    timerId.current = setInterval(() => {
      renders.current++;
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
  };

  const resetTimer = () => {
    stopTimer();
    if (seconds) {
      renders.current++;
      setSeconds(0);
    }
  };

  return (
    <>
      <main>
        <input
          // ref={inputRef}
          type="text"
          placeholder="randomInput"
          value={randomInput}
          onChange={handleChange}
        />
        <br />
        <br />

        <p>Renders : {renders.current}</p>

        {/* <button onClick={focusInput}>Focus</button> */}

        <button onClick={startTimer}>Start Timer</button>
        <button onClick={stopTimer}>Stop Timer</button>
        <button onClick={resetTimer}>Reset Timer</button>

        <p>{seconds}</p>

        <p>{randomInput}</p>
      </main>
    </>
  );
};

export default RefHook;
