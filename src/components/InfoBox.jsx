import React from "react";

export default function InfoBox(props) {
  return (
    <div className={props.class}>
      <i className={props.icon}></i>
      <h4 className="py-3">{props.title}</h4>
      <p className="para-light">{props.content}</p>
    </div>
  );
}
