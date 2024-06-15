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
  let [todoval, setTodoval] = useState({});
  const handleitemwords = (e) => {
    console.log(e.target.value);
  };
  const handledatevalue = (e) => {
    console.log(e.target.value);
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
      <AddTodo gettypedvalue={handleitemwords} getdatevalue={handledatevalue} />
      {arrayitems.map((e, idx) => (
        <TodoItem
          data={e}
          key={idx}
          handleeventlist={() => console.log(e.ItemName)}
        />
      ))}
      {/* <Feirebase /> */}
    </>
  );
};

export default todo;
