import { useState } from "react";

const Child = (props) => {
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(name);
  };

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          name=""
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Child;
