import React from "react";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const addTodo = ({ handleAdd }) => {
  const [todoName, setTodoName] = useState("");
  const [tododate, setTododate] = useState("");
  const handleNameChange = (e) => {
    setTodoName(e.target.value);
  };
  const handleDateChange = (e) => {
    setTododate(e.target.value);
  };
  const handleaddbuttonclicked = () => {
    handleAdd(todoName, tododate);
    setTodoName("");
    setTododate("");
  };
  return (
    <div className="container py-2">
      <div className="row">
        <div className="col-lg-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-lg-4">
          <input
            type="date"
            className="form-control"
            value={tododate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-lg-4">
          <button
            className="btn btn-success"
            onClick={() => handleaddbuttonclicked()}
          >
            <IoMdAdd />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default addTodo;
