import React from "react";

const calculator = () => {
  return (
    <>
      <div className="container center-flex">
        <div className="card-b">
          <input type="text" className="input-cal" value={0} />
          <div className="operations-cal">
            <div className="max-256">
              <span>C</span>
              <span>1</span>
              <span>2</span>
              <span>+</span>
              <span>3</span>
              <span>4</span>
              <span>-</span>
              <span>5</span>
              <span>6</span>
              <span>*</span>
              <span>7</span>
              <span>8</span>
              <span>/</span>
              <span>=</span>
              <span>9</span>
              <span>0</span>
              <span>.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default calculator;
