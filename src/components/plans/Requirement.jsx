import React from "react";

export default function Requirement(props) {
  return (
    <div className="block d-flex align-items-center">
      <p className="pe-2">
        <i className="far fa-check-circle fa-1x"></i>
      </p>
      <p>{props.content}</p>
    </div>
  );
}
