import { useCallback, useEffect, useMemo, useState } from "react";

// const fib = (n) => {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// };

const getArray = () => {
  for (let i = 0; i < 1000000000; i++) {
    //
  }

  return ["Avi", "Patel"];
};

const MemoHook = () => {
  const [userNumber, setUserNumber] = useState("");
  const [randomInput, setRandomInput] = useState("");

  const fib = useCallback((n) => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }, []);

  //   const fibNumber = useMemo(() => fib(userNumber), [userNumber]);
  const fibNumber = useMemo(() => fib(userNumber), [userNumber, fib]);

  const myArray = useMemo(() => getArray(), []);

  //   useEffect(() => {
  //     console.log(`New number : `);
  //   }, [fibNumber]);

  useEffect(() => {
    console.log(`New Array`);
  }, [myArray]);

  return (
    <>
      <main>
        <label htmlFor="inpnum">Fibbonacci Sequence:</label>
        <input
          type="number"
          name=""
          id="inpnum"
          value={userNumber}
          placeholder="position"
          onChange={(e) => setUserNumber(e.target.value)}
        />

        <p>Number : {fibNumber || "--"}</p>

        <br />
        <br />

        <label htmlFor="randomInp">Fibbonacci Sequence:</label>
        <input
          type="text"
          name=""
          id="randomInp"
          value={randomInput}
          placeholder="Random"
          onChange={(e) => setRandomInput(e.target.value)}
        />

        <p>{randomInput}</p>
      </main>
    </>
  );
};

export default MemoHook;
