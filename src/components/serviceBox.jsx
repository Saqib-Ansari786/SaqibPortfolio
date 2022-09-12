import React from "react";

export default function ServiceBox(props) {
  return (
    <div className="col-lg-4">
      <div className="card bg-transparent">
        <i className={props.icon}></i>
        <h4 className="py-2"> {props.title}</h4>
        <p className="para-light">{props.content}</p>
      </div>
    </div>
  );
}
