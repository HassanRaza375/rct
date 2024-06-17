import React, { useState, useEffect, useRef } from "react";
import AddTodo from "../components/addTodo";
import AppName from "../components/appname";
import TodoItem from "../components/todoitem";
// import Feirebase from "./firebase";
const todo = () => {
  let [arrayitems, setarrayitems] = useState([
    { ItemName: "Mango", ItemAdded_data: "4/10/2023" },
    { ItemName: "Orange", ItemAdded_data: "5/10/2023" },
    { ItemName: "Apple", ItemAdded_data: "3/10/2023" },
  ]);

  const AddEventHandler = (name, date) => {
    const newobj = {};
    newobj.ItemName = name;
    newobj.ItemAdded_data = date;
    const newarray = [...arrayitems, newobj];
    setarrayitems(newarray);
  };
  const DeleteEvent = (id) => {
    const newarray = arrayitems.filter((e) => {
      return e.ItemName === id ? "" : e;
    });
    setarrayitems(newarray);
  };
  return (
    <>
      <div className="container-fluid bg-warning py-2 mb-3">
        <div className="row">
          <div className="col-12">
            <AppName title="My Todos" />
          </div>
        </div>
      </div>
      <AddTodo handleAdd={AddEventHandler} />
      {arrayitems.length > 0 ? (
        arrayitems.map((e, idx) => (
          <TodoItem data={e} key={idx} handleDel={DeleteEvent} />
        ))
      ) : (
        <AppName title="No Record Found" />
      )}
      {/* <Feirebase /> */}
    </>
  );
};

export default todo;
