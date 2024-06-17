import React from "react";
import { MdOutlineDelete } from "react-icons/md";

const todoitem = (props) => {
  let { ItemName, ItemAdded_data, delclass } = props.data;
  return (
    <div className={"container py-2" + delclass}>
      <div className="row mb-2" key={ItemAdded_data}>
        <div className="col-lg-4">{ItemName}</div>
        <div className="col-lg-4">{ItemAdded_data}</div>
        <div className="col-lg-4">
          <button
            className="btn btn-danger"
            onClick={() => props.handleDel(ItemName)}
          >
            <MdOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default todoitem;
