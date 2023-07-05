// import CallBackHook from "./components/CallBackHook";
// import MemoHook from "./components/MemoHook";
import Child from "./components/Child/Child";
// import RefHook from "./components/RefHook";

const App = () => {
  const getData = (data) => {
    console.log("🚀 ~ file: App.jsx:9 ~ getData ~ data:", data);
  };

  return (
    <>
      {/* <CallBackHook /> */}
      {/* <MemoHook /> */}
      {/* <RefHook /> */}
      <Child onSubmit={getData} />
    </>
  );
};

export default App;
