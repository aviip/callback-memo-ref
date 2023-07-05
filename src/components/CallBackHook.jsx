import { useCallback, useEffect, useState } from "react";

const CallBackHook = () => {
  const [userInput, setUserInput] = useState("");

  const [num1] = useState(4);
  const [num2] = useState(5);

  const [result, setResult] = useState(0);

  // const sum = () => num1 + num2;

  //   const sum = useCallback(() => {
  //     return num1 + num2;
  //   }, [num1, num2]);

  const buildArray = useCallback(() => {
    return [num1, num2];
  }, [num1, num2]);

  // useEffect(() => {
  //   console.log(`New sum is ${sum()}`);
  // }, [sum]);

  useEffect(() => {
    console.log(`New Array: ${buildArray()}`);
    setResult(setResult());
  }, [buildArray]);

  return (
    <>
      <main>
        <input
          type="text"
          placeholder="input"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />

        <h1>Output: {userInput || "--"}</h1>
      </main>
    </>
  );
};

export default CallBackHook;
