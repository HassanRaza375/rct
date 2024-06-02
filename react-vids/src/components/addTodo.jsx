import React from "react";

const addTodo = () => {
  return (
    <div className="container py-2">
      <div className="row">
        <div className="col-lg-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo here"
          />
        </div>
        <div className="col-lg-4">
          <input type="date" className="form-control" />
        </div>
        <div className="col-lg-4">
          <button className="btn btn-success">Add</button>
        </div>
      </div>
    </div>
  );
};

export default addTodo;
