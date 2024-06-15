import React from "react";

const buttonscal = () => {
  const arraynumbers_calculator = [
    "C",
    1,
    2,
    "+",
    3,
    4,
    "-",
    5,
    6,
    "*",
    7,
    8,
    "/",
    "=",
    9,
    0,
    ".",
  ];
  return (
    <>
      {arraynumbers_calculator.map((e, idx) => (
        <span key={idx}>{e}</span>
      ))}
    </>
  );
};

export default buttonscal;
