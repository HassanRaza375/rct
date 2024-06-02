import React from "react";

const todoitem = (props) => {
  let { ItemName, ItemAdded_data } = props.data;
  return (
    <div className="container py-2">
      <div className="row mb-2" key={ItemAdded_data}>
        <div className="col-lg-4">{ItemName}</div>
        <div className="col-lg-4">{ItemAdded_data}</div>
        <div className="col-lg-4">
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default todoitem;
