import React from "react";

const appname = (props) => {
  return (
    <h1 className="display-4 fw-bold text-center mb-0">
      {/* Todo Project */}
      {props.title || "Todo Project"}
    </h1>
  );
};

export default appname;
