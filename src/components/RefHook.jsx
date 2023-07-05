import { useState } from "react";

const RefHook = () => {
  const [randomInput, setRandomInput] = useState("");

  const [count, setCount] = useState(1);

  //   var date = new Date(2023, 6, 4, 12, 0, 50);
  //   console.log(date);

  const counter = setInterval(() => {
    setCount(count + 1);

    return clearInterval(counter);
  }, 1000);

  return (
    <>
      <main>
        <input
          type="text"
          placeholder="randomInput"
          value={randomInput}
          onChange={(e) => setRandomInput(e.target.value)}
        />
        <br />
        <br />

        <p>{randomInput}</p>

        <p>{count}</p>
      </main>
    </>
  );
};

export default RefHook;
