import React from "react";

export default function LocationCard(props) {
  return (
    <div className="col-lg-3 d-flex align-items-center">
      <div className="p-2">
        <i className={props.icon}></i>
      </div>
      <div className="ms-2">
        <h6>{props.title}</h6>
        <p>{props.content}</p>
      </div>
    </div>
  );
}
