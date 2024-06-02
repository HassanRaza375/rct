import React from "react";
import { useState } from "react";
import Custombutton from "./button";
const counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="card m-2">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Custombutton title="Like the vids" />
    </div>
  );
};

export default counter;
