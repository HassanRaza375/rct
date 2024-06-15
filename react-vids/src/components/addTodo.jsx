import React from "react";

const addTodo = ({ gettypedvalue }) => {
  return (
    <div className="container py-2">
      <div className="row">
        <div className="col-lg-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo here"
            onKeyDown={gettypedvalue}
          />
        </div>
        <div className="col-lg-4">
          <input
            type="date"
            className="form-control"
            onChange={gettypedvalue}
          />
        </div>
        <div className="col-lg-4">
          <button className="btn btn-success">Add</button>
        </div>
      </div>
    </div>
  );
};

export default addTodo;
